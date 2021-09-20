import React from "react";
class Data extends React.Component {
  state = { data: [], loading: true };

  //1. use fetch library (inplace of axios)
  //2. use .then .catch syntax (in place of async await)
  componentDidMount() {
    // axios.get("https://reqres.in/api/users?page=2").then(res =>{}).catch(err=>)
    // on additional step we need with fetch convert json => js object (axios does this for us)

    fetch("https://reqres.in/api/users?page=2")
      .then((res) => {
        // console.log("res", res);
        return res.json();
      })
      .then((resData) => {
        // console.log("resData", resData);
        this.setState({ data: resData.data, loading: false });
      })
      .catch((err) => {});
  }
  render() {
    const { data, loading } = this.state;

    if (loading) {
      return <span>...Loading Data</span>;
    } else {
      return (
        <ol>
          {data.map((d) => (
            <li key={d.id}>{d.email}</li>
          ))}
        </ol>
      );
    }
  }
}

export default Data;
