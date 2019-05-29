import React, {useState} from "react";
import styled from "styled-components";
import * as R from "ramda";

import useLangPath from "~/hooks/useLangPath";
import AccountInformationItem from "../AccountInformationItem";


type Props = {|
    user: {
        email: string,
        name: string,
        phone: string,
        job: string,
    },
|};

const CardBodyInner = styled.div`
    padding-left: 9.8rem;
`;

const eventSetValue = (setter: (value: string) => void) => (event: Event) => { setter(event.target.value); };

// TODO : correct the path, it's not making sense that it's pointing to another page
const useJobOptions = R.pipe(
    R.always(['pages', 'signup', 'signupForm', 'jobOptions']),
    useLangPath
);

export default function AccountInformationForm(props: Props) {
    const {user} = props;
    const lang = useLangPath(['pages', 'my-account', 'accountInformation', 'form']);
    const [phone, setPhone] = useState(user.phone);
    const [job, setJob] = useState(user.job);
    const jobOptions = useJobOptions();
    return (
        <CardBodyInner>
            <AccountInformationItem title={lang.email} name="email" value={user.email} />
            <AccountInformationItem title={lang.name} name="name" value={user.name} />
            <AccountInformationItem title={lang.phone} name="phone" value={phone} onChange={eventSetValue(setPhone)} editable />
            <AccountInformationItem
                title={lang.job}
                name="job"
                value={job}
                selectOptions={jobOptions}
                onChange={eventSetValue(setJob)}
            />
        </CardBodyInner>
    );
};
