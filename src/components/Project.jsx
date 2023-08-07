import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

function Card({ data }) {

    console.log(data.icon)
    return (
        <>
            <div className="card col-lg-3 col-md-5 col-sm-9 project-card " >
                <img className="img-fluid project-img" src={data.img} alt="image loading..." />                <div className="card-body">
                    <h5 className="card-title" id="h5">{data.title}</h5>
                    <p className="card-text project-des">{data.description}</p>
                    {
                        data.icon.map(datas => (
                            <img className='project-icon' src={datas} />
                        ))
                    }
                </div>
                <div className="card-footer">
                    <a className='project-view' href={data.url}> View</a>
                    {/* <div>
                    <a>Front end code</a>
                  </div> */}
                </div>
            </div>
        </>
    )
}
function Project({ projectdata }) {
    return (
        <div className='project-body'>
            <div className='row project '>
                {
                    projectdata.map(data => (
                        <Card data={data} />
                    ))
                }
            </div>
        </div>
    )
}

export default Project;