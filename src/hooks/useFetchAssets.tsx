import {useState, useEffect} from "react";

const useFetchAssets = () => {
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState<any[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        // fetch here
        setLoading(true);
        fetch('/stub/sampleData.json')
        .then(res => res.json())
        .then(data => {
            setResponse(data);
            setLoading(false);
        })
        .catch(error => {
            setError('Something went wrong');
            setLoading(false);
        })
    }, [])

    return { loading, response, error };
}

export default useFetchAssets;
