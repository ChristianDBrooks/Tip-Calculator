import React from 'react';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            divideVal: 2,
            totalPerPerson: 0,
        };
    }

    changeHandler = (e) => {
        e.preventDefault();
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        }, () => {
            this.updateTotalPerPerson()
        })
    }

    updateTotalPerPerson = () => {
        console.log('Firing update!')
        console.log(this.state.total, this.state.divideVal)
        let value = (this.state.total / this.state.divideVal)
        value = !isNaN(value) && value >= 0 ? value : 0
        this.setState({
            totalPerPerson: value.toFixed(2)
        });
    }

    render() {
        return (
            <div style={{width: this.props.width}}>
                <h5 className='text-center'>
                    This is a simple app to assist with splitting a check between a given number of guests.
                </h5>
                <p className='text-center'>
                    Its easy! First enter the total on the check. Then select the number of guests to split it by!
                </p>
                <div className="container-fluid">
                    <div className="row">
                        {/* Price Input */}
                        <div className={`col-sm-${this.props.col1} input-group pl-0 pr-0`}>
                            <div className="input-group-prepend" style={{margin: '1px 0px'}}>
                                <span class="input-group-text bg-dark text-dark shadow`" id="basic-addon1"><i class="fas fa-receipt"></i></span>
                            </div>
                            <input
                                className="form-control bg-light text-dark shadow my-0"
                                style={{fontSize: '16px'}}
                                name="total"
                                type="text"
                                placeholder="Receipt Total"
                                onChange={this.changeHandler}
                            />
                        </div>

                        {/* Split Multiplier */}
                        <input 
                            className={`col-sm-${this.props.col2} form-control bg-primary text-dark shadow`}
                            style={{fontWeight: 'bold', fontSize: '16px'}}
                            name="divideVal"
                            type="number"
                            min="2"
                            max="1000"
                            defaultValue="2"
                            placeholder="Number of People"
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div className="row">
                        {/* Display result. */}
                        <div className="w-100 mt-2 text-center">
                            <h4 className="text-success bg-dark text-dark p-2 rounded shadow">
                                { 'Everyone Pays $' + this.state.totalPerPerson }
                            </h4>
                        </div>
                    </div> 
                </div>
            </div>
            
        );
    }
}

export default Calculator