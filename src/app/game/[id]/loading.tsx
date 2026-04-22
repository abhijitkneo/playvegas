import { Container } from "react-bootstrap";

export default function loading() {
    return (
        <Container fluid>
            <div className="row">
                
                <div className="col-md-3">
                    <div className="placeholder-glow mb-3">
                        <div className="placeholder w-100 rounded" style={{ height: "220px" }}></div>
                    </div>

                    <div className="placeholder-glow mb-4">
                        <span className="placeholder col-12 rounded" style={{ height: "48px" }}></span>
                    </div>

                    <div className="card bg-dark text-light p-3 border-0">
                        <div className="placeholder-glow mb-3">
                            <span className="placeholder col-6"></span>
                        </div>

                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="mb-3">
                                <div className="placeholder-glow">
                                    <span className="placeholder col-4 bg-light"></span>
                                </div>
                                <div className="placeholder-glow">
                                    <span className="placeholder col-8 bg-light"></span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT */}
                <div className="col-md-9">
                    {/* Title */}
                    <div className="placeholder-glow mb-3">
                        <span className="placeholder col-6"></span>
                    </div>

                    {/* Description */}
                    <div className="placeholder-glow">
                        <span className="placeholder col-12"></span>
                        <span className="placeholder col-10"></span>
                        <span className="placeholder col-8"></span>
                    </div>

                    <hr className="my-4" />

                    {/* Screenshots */}
                    <div className="placeholder-glow mb-3">
                        <span className="placeholder col-5"></span>
                    </div>

                    <div className="row mb-4">
                        {[...Array(3)].map((_, i) => (
                            <div className="col-md-4" key={i}>
                                <div
                                    className="placeholder w-100 mb-3"
                                    style={{
                                        height: "160px",
                                        borderRadius: "12px",
                                    }}
                                ></div>
                            </div>
                        ))}
                    </div>

                    {/* Additional Info */}
                    <div className="placeholder-glow mb-3">
                        <span className="placeholder col-5"></span>
                    </div>

                    <div className="card bg-dark text-light p-4 border-0">
                        <div className="row">
                            {[...Array(6)].map((_, i) => (
                                <div className="col-md-4 mb-3" key={i}>
                                    <div className="placeholder-glow">
                                        <span className="placeholder col-6"></span>
                                    </div>
                                    <div className="placeholder-glow">
                                        <span className="placeholder col-8"></span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}