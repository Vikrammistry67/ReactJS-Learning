import { useSearchParams } from "react-router-dom";

const SearchParams = () => {
    const [searchParams] = useSearchParams();
    const catagory = searchParams.get('category');
    console.log(catagory)
    return (
        <div>SearchParams</div>
    )
}

export default SearchParams