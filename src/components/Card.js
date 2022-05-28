import React from 'react';

function Card(data) {

    return (
        <div className="card-group mx-3 my-2 col col-md-6 col-lg-4">
            <div className="card text-center rainbow-border">
                <div className="card-header">
                    {data.cardHeader}
                </div>
                <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title">
                        {data.title}
                    </h5>
                    <a href={data.url} className="btn btn-outline-primary">
                        {data.buttonText}
                    </a>
                </div>
                <div className="card-footer text-muted">
                    {data.uploadDate.day} {data.uploadDate.month} {data.uploadDate.year}
                </div>
            </div>
        </div>
    )
}

export default Card;