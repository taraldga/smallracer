interface Race {
    id: String;
    name: String;
    description: String;
    contestants?: Array<Participant>;
}

export default Race;