import useFetch from "../../../../components/HooksLearning/cutomHooks/useFetch";

const ApiRequest = () => {
    const [loading, error, data] = useFetch('https://fakestoreapi.com/users');

    if (loading) return <h3>Loading...</h3>;

    if (error) return <h3>Something went wrong.</h3>

    console.log(data)
    return (
        <div>
            {data}
        </div>
    )
}

export default ApiRequest