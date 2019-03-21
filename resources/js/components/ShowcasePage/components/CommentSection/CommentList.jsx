import React, {useContext, useState, useEffect} from "react";
import * as R from "ramda";
import method from "../../../../helpers/method";
import ShowcaseContext from "../../ShowcaseContext";
import LoadingSpinner from "../../../LoadingSpinner";

type Props = {

};


function CommentList(props: Props) {
    const [items, setItems] = useState([]);
    const showcase = useContext(ShowcaseContext);

    useEffect(() => {
        R.when(
            R.complement(R.isNil),
            R.pipe(
                method('getComments'),
                R.then(R.pipe(
                    R.map(method('getCommentItem')),
                    R.addIndex(R.map)((Item, index) => <Item key={index} />),
                    setItems
                ))
            )
        )(showcase);
    }, [showcase]);

    if (showcase === null) { return <LoadingSpinner />; }

    return items;
}

export default R.compose(
    R.identity
)(CommentList);
