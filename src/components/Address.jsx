const Address = () => {
    return (
        <>
        <h3 className="text-center pd-bottom-md">Address</h3>
        <div className="address-ctn pd-bottom-lg">
            <div className="address">
                <p className="para-md">Pratik Devle</p>
                <p>803/A, Nirmal House</p>
                <p>hospital</p>
                <p>Mumbai, 400012</p>
                <p>India</p>
                <p>Contact: 9876543210</p>
                <div className="option">
                    <button className="btn-float-action"><span class="material-icons">edit</span></button>
                    <button className="btn-float-action"><span class="material-icons">delete</span></button>
                </div>
            </div>
        </div>
        <button className="btn btn-icon-text"><span class="material-icons">add</span>Add address</button>
        </>
    );
}

export {Address}