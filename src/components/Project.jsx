import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Fade } from 'react-reveal';
import projectdata from './projectHook';

function Project() {
    return (
        <>
            <div className='project-body'>
                <h2 className='project-heading mb-3'>Projects</h2>
                <div className='row project '>

                    {
                        projectdata.map(data => (
                            data.backend ? (
                                <Fade up key={data.id}>
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
                                            <div>
                                                <a className='project-view' href={data.url}> View</a>
                                            </div>
                                            <div>
                                                <a className='project-view' href={data.frontend}>Front-end</a>
                                                <a className='project-view' href={data.backend}>back-end</a>
                                            </div>
                                        </div>


                                    </div>
                                </Fade>
                            ) : (
                                <Fade up key={data.id}>
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
                                            <div>
                                                <a className='project-view' href={data.url}> View</a>
                                            </div>
                                            <div>
                                                <a className='project-view' href={data.frontend}>Front-end</a>
                                            </div>
                                        </div>


                                    </div>
                                </Fade>
                            )
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Project;