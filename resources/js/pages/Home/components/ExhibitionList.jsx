import React, {useState, useContext, useRef, useCallback} from "react";
import styled from "styled-components";
import * as R from "ramda";
import {Row, Col} from "styled-bootstrap-grid";

import useCleanEffect from "../../../hooks/useCleanEffect";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import ModelsContext from "../../../contexts/ModelsContext";
import MuseumTitle from "../../../components/MuseumTitle";
import HomeContainer from "../HomeContainer";
import LoadingSpinner from "../../../components/LoadingSpinner";



type Props = {
    showcases: Array<string>,
    title: string,
};

const Root = styled(HomeContainer)`
    background-color: #f4f4f4;
`;

const PAGE_SIZE = 6;

function ExhibitionList(props: Props) {
    const {title, showcases} = props;
    const [showcasesCard, setShowcasesCard] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [nextIndex, setNextIndex] = useState(0);
    const {Showcases} = useContext(ModelsContext);
    const loaderRef = useRef(null);

    const hasMore = nextIndex < showcases.length;

    const loadMore = useCallback(async (hasUnmounted = () => false) => {
        if (isLoading || !hasMore) return;

        setIsLoading(true);
        const chunk = showcases.slice(nextIndex, nextIndex + PAGE_SIZE);
        
        try {
            const loadedShowcases = await Showcases.get(chunk);
            if (hasUnmounted()) return;

            const newCards = R.pipe(
                R.invoker(0, 'sortDateDesc'),
                Array.from,
                R.map(showcase => (
                    <Col key={showcase.getAttribute('mid')} lg={4} className="mb-5">
                        {React.createElement(showcase.generateCard())}
                    </Col>
                ))
            )(loadedShowcases);

            setShowcasesCard(prev => [...prev, ...newCards]);
            setNextIndex(prev => prev + PAGE_SIZE);
        } catch (e) {
            console.error("Failed to load more showcases", e);
        } finally {
            if (!hasUnmounted()) {
                setIsLoading(false);
            }
        }
    }, [isLoading, hasMore, nextIndex, showcases, Showcases]);

    useCleanEffect(hasUnmounted => {
        loadMore(hasUnmounted);
    }, []);

    useIntersectionObserver(loaderRef, () => {
        if (hasMore && !isLoading) {
            loadMore();
        }
    });

    return (
        <Root>
            <MuseumTitle>{title}</MuseumTitle>
            <br /><br />
            <Row>
                {showcasesCard}
            </Row>
            {hasMore && (
                <div ref={loaderRef} style={{ padding: '2rem 0', textAlign: 'center' }}>
                    {isLoading && <LoadingSpinner transparentBackground />}
                </div>
            )}
        </Root>
    );
}

export default R.compose(
    R.identity
)(ExhibitionList);
