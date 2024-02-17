function Card(props) {
  return (
    <div className="card">
      <br />
      
      <div className="text-center">
        <img alt="card-img" src={"/company-website-reactjs/img/"+props.img} className="text-center img-fluid" style={{ height: "130px", width: "140px" }}/>
      </div>
      <div className="text-center">
        <h3 className="card-title">{props.title}</h3>
      </div>
      <div className="p-3">
        <p className="card-text">
           {props.text}
        </p>
      </div>
    </div>
  );
}
export default Card;
