import React from 'react'

//To pass the data to the submitted by image
function Images(props) {
  return (<img src="./submit.jpg" className="img-circle imag" style={props.style} alt="albumimage" />);
}

//Using map to dispaly each element
function CardsData(props) {
  return (
    <React.Fragment>
      {props.displayContent.map(elem => {
        return (
          <div key={elem.id} className="card my-3 w-50 h-25">
            <div className="row no-gutters">
              <div className="col-md-4 my-auto">
                <img src={elem.productImageUrl} className="card-img w-75" alt="albumimage" />
              </div>
              <div className="col-md-8">
                <button className="btn btn-lg" onClick={() => props.votesData(elem.id)}>{elem.votes} <span className="glyphicon glyphicon-triangle-top"></span></button>
                <div className="card-body">
                  <h3 className="card-title font-weight-bold"><a href={elem.url}>{elem.title}</a></h3>
                  <h5 className="card-text font-weight-bold">{elem.description}</h5>
                  <p className="card-text"><small className="text-muted">Submitted By : <Images style={{ width: '50px', height: '50px' }} /></small></p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment >
  );
}

export default CardsData;