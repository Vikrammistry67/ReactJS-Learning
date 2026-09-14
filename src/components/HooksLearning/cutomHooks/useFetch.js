import { useEffect, useState } from "react"

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const controller = new AbortController();
    const getData = async () => {
        try {
            const response = await fetch(url
                ,
                {
                    signal: controller.signal
                }
            );
            const data = await response.json();
            setData(data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();

        return () => controller.abort();
    }, [url])

    return [data, loading, error];
}

export default useFetch