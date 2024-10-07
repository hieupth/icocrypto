import React, { useEffect, useState } from 'react';

interface NotificationProps {
    message: string; 
    label: string; // Đưa label ra ngoài
}

export const TopCenterNotification: React.FC<NotificationProps> = ({ message, label }) => {
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(true);
    };

    const handleClose = () => {
        setVisible(false);
    };

    useEffect(() => {
        if (visible) {
            const timer = setTimeout(() => {
                handleClose();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [visible]);

    return (
        <div className="col-lg-3">
            <a href="#" className="btn btn-md btn-primary toastr-top-center" onClick={handleClick}>
                {label} 
            </a>

            {visible && (
                <div style={{
                    position: 'fixed',
                    top: '20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    padding: '10px 20px',
                    background: 'rgba(0, 123, 255, 0.9)',
                    color: '#fff',
                    borderRadius: '5px',
                    zIndex: 1000
                }}>
                    {message} { }
                    <button style={{
                        marginLeft: '10px',
                        background: 'none',
                        border: 'none',
                        color: '#fff',
                        cursor: 'pointer'
                    }} onClick={handleClose}>X</button>
                </div>
            )}
        </div>
    );
};


export const TopRightNotification: React.FC<NotificationProps> = ({ message, label }) => {
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(true);
    };

    const handleClose = () => {
        setVisible(false);
    };

    useEffect(() => {
        if (visible) {
            const timer = setTimeout(() => {
                handleClose();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [visible]);

    return (
        <div className="col-lg-3">
            <a href="#" className="btn btn-md btn-primary toastr-top-right" onClick={handleClick}>
                {label}
            </a>

            {visible && (
                <div style={{
                    position: 'fixed',
                    top: '20px',
                    right: '20px', 
                    padding: '10px 20px',
                    background: 'rgba(0, 123, 255, 0.9)',
                    color: '#fff',
                    borderRadius: '5px',
                    zIndex: 1000
                }}>
                    {message}
                    <button style={{
                        marginLeft: '10px',
                        background: 'none',
                        border: 'none',
                        color: '#fff',
                        cursor: 'pointer'
                    }} onClick={handleClose}>X</button>
                </div>
            )}
        </div>
    );
};
export const TopLeftNotification: React.FC<NotificationProps> = ({ message, label }) => {
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(true);
    };

    const handleClose = () => {
        setVisible(false);
    };

    useEffect(() => {
        if (visible) {
            const timer = setTimeout(() => {
                handleClose();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [visible]);

    return (
        <div className="col-lg-3">
            <a href="#" className="btn btn-md btn-primary toastr-top-left" onClick={handleClick}>
                {label}
            </a>

            {visible && (
                <div style={{
                    position: 'fixed',
                    top: '20px',
                    left: '20px', 
                    padding: '10px 20px',
                    background: 'rgba(0, 123, 255, 0.9)',
                    color: '#fff',
                    borderRadius: '5px',
                    zIndex: 1000
                }}>
                    {message}
                    <button style={{
                        marginLeft: '10px',
                        background: 'none',
                        border: 'none',
                        color: '#fff',
                        cursor: 'pointer'
                    }} onClick={handleClose}>X</button>
                </div>
            )}
        </div>
    );
};

export const TopFullNotification: React.FC<NotificationProps> = ({ message, label }) => {
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(true);
    };

    const handleClose = () => {
        setVisible(false);
    };

    useEffect(() => {
        if (visible) {
            const timer = setTimeout(() => {
                handleClose();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [visible]);

    return (
        <div className="col-lg-3">
            <a href="#" className="btn btn-md btn-primary toastr-top-full" onClick={handleClick}>
                {label}
            </a>

            {visible && (
                <div style={{
                    position: 'fixed',
                    top: '0', 
                    left: '0', 
                    width: '100%', 
                    padding: '10px 20px',
                    background: 'rgba(0, 123, 255, 0.9)',
                    color: '#fff',
                    borderRadius: '0 0 5px 5px', 
                    zIndex: 1000
                }}>
                    {message}
                    <button style={{
                        marginLeft: '10px',
                        background: 'none',
                        border: 'none',
                        color: '#fff',
                        cursor: 'pointer'
                    }} onClick={handleClose}>X</button>
                </div>
            )}
        </div>
    );
};
export const BottomCenterNotification: React.FC<NotificationProps> = ({ message, label }) => {
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(true);
    };

    const handleClose = () => {
        setVisible(false);
    };

    useEffect(() => {
        if (visible) {
            const timer = setTimeout(() => {
                handleClose();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [visible]);

    return (
        <div className="col-lg-3">
            <a href="#" className="btn btn-md btn-primary toastr-bottom-center" onClick={handleClick}>
                {label}
            </a>

            {visible && (
                <div style={{
                    position: 'fixed',
                    bottom: '20px', 
                    left: '50%', 
                    transform: 'translateX(-50%)', 
                    padding: '10px 20px',
                    background: 'rgba(0, 123, 255, 0.9)',
                    color: '#fff',
                    borderRadius: '5px',
                    zIndex: 1000
                }}>
                    {message}
                    <button style={{
                        marginLeft: '10px',
                        background: 'none',
                        border: 'none',
                        color: '#fff',
                        cursor: 'pointer'
                    }} onClick={handleClose}>X</button>
                </div>
            )}
        </div>
    );
};
export const BottomRightNotification: React.FC<NotificationProps> = ({ message, label }) => {
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(true);
    };

    const handleClose = () => {
        setVisible(false);
    };

    useEffect(() => {
        if (visible) {
            const timer = setTimeout(() => {
                handleClose();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [visible]);

    return (
        <div className="col-lg-3">
            <a href="#" className="btn btn-md btn-primary toastr-bottom-right" onClick={handleClick}>
                {label}
            </a>

            {visible && (
                <div style={{
                    position: 'fixed',
                    bottom: '20px', 
                    right: '20px', 
                    padding: '10px 20px',
                    background: 'rgba(0, 123, 255, 0.9)',
                    color: '#fff',
                    borderRadius: '5px',
                    zIndex: 1000
                }}>
                    {message}
                    <button style={{
                        marginLeft: '10px',
                        background: 'none',
                        border: 'none',
                        color: '#fff',
                        cursor: 'pointer'
                    }} onClick={handleClose}>X</button>
                </div>
            )}
        </div>
    );
};
export const BottomLeftNotification: React.FC<NotificationProps> = ({ message, label }) => {
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(true);
    };

    const handleClose = () => {
        setVisible(false);
    };

    useEffect(() => {
        if (visible) {
            const timer = setTimeout(() => {
                handleClose();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [visible]);

    return (
        <div className="col-lg-3">
            <a href="#" className="btn btn-md btn-primary toastr-bottom-left" onClick={handleClick}>
                {label}
            </a>

            {visible && (
                <div style={{
                    position: 'fixed',
                    bottom: '20px', 
                    left: '20px', 
                    padding: '10px 20px',
                    background: 'rgba(0, 123, 255, 0.9)',
                    color: '#fff',
                    borderRadius: '5px',
                    zIndex: 1000
                }}>
                    {message}
                    <button style={{
                        marginLeft: '10px',
                        background: 'none',
                        border: 'none',
                        color: '#fff',
                        cursor: 'pointer'
                    }} onClick={handleClose}>X</button>
                </div>
            )}
        </div>
    );
};

export const BottomFullNotification: React.FC<NotificationProps> = ({ message, label }) => {
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(true);
    };

    const handleClose = () => {
        setVisible(false);
    };

    useEffect(() => {
        if (visible) {
            const timer = setTimeout(() => {
                handleClose();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [visible]);

    return (
        <div className="col-lg-3">
            <a href="#" className="btn btn-md btn-primary toastr-bottom-full" onClick={handleClick}>
                {label}
            </a>

            {visible && (
                <div style={{
                    position: 'fixed',
                    bottom: '0', 
                    left: '0', 
                    width: '100%', 
                    padding: '10px 20px',
                    background: 'rgba(0, 123, 255, 0.9)',
                    color: '#fff',
                    borderRadius: '0 0 5px 5px', 
                    zIndex: 1000,
                    textAlign: 'center' 
                }}>
                    {message}
                    <button style={{
                        marginLeft: '10px',
                        background: 'none',
                        border: 'none',
                        color: '#fff',
                        cursor: 'pointer'
                    }} onClick={handleClose}>X</button>
                </div>
            )}
        </div>
    );
};

export const InfoNotification: React.FC<NotificationProps> = ({ message, label }) => {
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(true);
    };

    const handleClose = () => {
        setVisible(false);
    };

    useEffect(() => {
        if (visible) {
            const timer = setTimeout(() => {
                handleClose();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [visible]);

    return (
        <div className="col-lg-3">
            <a href="#" className="btn btn-md btn-info" onClick={handleClick}>
                {label}
            </a>

            {visible && (
                <div style={{
                    position: 'fixed',
                    top: '20px', 
                    left: '50%',
                    transform: 'translateX(-50%)', 
                    padding: '10px 20px',
                    background: 'rgba(23, 162, 184, 0.9)', 
                    color: '#fff',
                    borderRadius: '5px',
                    zIndex: 1000
                }}>
                    {message}
                    <button style={{
                        marginLeft: '10px',
                        background: 'none',
                        border: 'none',
                        color: '#fff',
                        cursor: 'pointer'
                    }} onClick={handleClose}>X</button>
                </div>
            )}
        </div>
    );
};

export const SuccessNotification: React.FC<NotificationProps> = ({ message, label }) => {
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(true);
    };

    const handleClose = () => {
        setVisible(false);
    };

    useEffect(() => {
        if (visible) {
            const timer = setTimeout(() => {
                handleClose();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [visible]);

    return (
        <div className="col-lg-3">
            <a href="#" className="btn btn-md btn-success" onClick={handleClick}>
                {label}
            </a>

            {visible && (
                <div style={{
                    position: 'fixed',
                    top: '20px', 
                    left: '50%',
                    transform: 'translateX(-50%)', 
                    padding: '10px 20px',
                    background: 'rgba(40, 167, 69, 0.9)', 
                    color: '#fff',
                    borderRadius: '5px',
                    zIndex: 1000
                }}>
                    {message}
                    <button style={{
                        marginLeft: '10px',
                        background: 'none',
                        border: 'none',
                        color: '#fff',
                        cursor: 'pointer'
                    }} onClick={handleClose}>X</button>
                </div>
            )}
        </div>
    );
};

export const WarningNotification: React.FC<NotificationProps> = ({ message, label }) => {
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(true);
    };

    const handleClose = () => {
        setVisible(false);
    };

    useEffect(() => {
        if (visible) {
            const timer = setTimeout(() => {
                handleClose();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [visible]);

    return (
        <div className="col-lg-3">
            <a href="#" className="btn btn-md btn-warning" onClick={handleClick}>
                {label}
            </a>

            {visible && (
                <div style={{
                    position: 'fixed',
                    top: '20px', // Vị trí thông báo
                    left: '50%',
                    transform: 'translateX(-50%)', // Canh giữa thông báo
                    padding: '10px 20px',
                    background: 'rgba(255, 193, 7, 0.9)', // Màu nền thông báo cảnh báo
                    color: '#fff',
                    borderRadius: '5px',
                    zIndex: 1000
                }}>
                    {message}
                    <button style={{
                        marginLeft: '10px',
                        background: 'none',
                        border: 'none',
                        color: '#fff',
                        cursor: 'pointer'
                    }} onClick={handleClose}>X</button>
                </div>
            )}
        </div>
    );
};

export const ErrorNotification: React.FC<NotificationProps> = ({ message, label }) => {
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(true);
    };

    const handleClose = () => {
        setVisible(false);
    };

    useEffect(() => {
        if (visible) {
            const timer = setTimeout(() => {
                handleClose();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [visible]);

    return (
        <div className="col-lg-3">
            <a href="#" className="btn btn-md btn-danger" onClick={handleClick}>
                {label}
            </a>

            {visible && (
                <div style={{
                    position: 'fixed',
                    top: '20px', // Vị trí thông báo
                    left: '50%',
                    transform: 'translateX(-50%)', // Canh giữa thông báo
                    padding: '10px 20px',
                    background: 'rgba(220, 53, 69, 0.9)', // Màu nền thông báo lỗi
                    color: '#fff',
                    borderRadius: '5px',
                    zIndex: 1000
                }}>
                    {message}
                    <button style={{
                        marginLeft: '10px',
                        background: 'none',
                        border: 'none',
                        color: '#fff',
                        cursor: 'pointer'
                    }} onClick={handleClose}>X</button>
                </div>
            )}
        </div>
    );
};