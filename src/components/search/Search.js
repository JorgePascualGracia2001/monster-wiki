import "./Search.scss";
import Card from '../common/Card'

function Search() {
  return (
    <Card className="card-main background-primary-gray" >
        <form>
            <input type="text"></input>
        </form>
    </Card>
  );
}

export default Search;
