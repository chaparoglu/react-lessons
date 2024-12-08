import { useEffect, useState } from "react"
import { FaArrowCircleRight, FaArrowRight, FaReplyAll } from "react-icons/fa";
import axios from "axios";

function CurrenctComponent() {
    const [currency, setCurrency] = useState(0)
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TRY');
    const [rate, setRate] = useState(null);

    const exchange = async () => {
        if(currency != 0){
            if(fromCurrency !== toCurrency){
                let API_KEY = 'fca_live_O0R88OA3eno17pfYLdkgBC0I5Gqov8ZIOjZIiwhy';
                let BASE_URL = 'https://api.freecurrencyapi.com/v1/latest';
                try {
                    const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
                    const exchangeRate = response.data.data[toCurrency];
                    const newRate = (exchangeRate*currency).toFixed(2);
                    setRate(newRate);
                } catch (error) {
                    console.error("API Error:", error);
                }
            } else {
                alert('Seçilən valyuta dəyərləri eyni ola bilməz!')
            }    
        } else {
            alert('Zəhmət olmasa dəyər daxil edin!');
        }
    };

    const reloadForm = () => {
        setCurrency(0);
        setRate(0);
    }

    return (
        <div className="mt-4">
            <h3 className="text-success">Valyuta məzənnəsi</h3>
            <div className="row mt-4">
                <div className="col-md-4">
                    <div className="form-group">
                        <input type="number" step="any" value={currency} className="form-control" onInput={(e) => setCurrency(e.target.value)} name="currency" id="" />
                    </div>
                    <div className="form-group mt-4">
                        <div className="row">
                            <div className="col-md-5">
                                <select name="convert_from" value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)} className="form-control" id="">
                                    <option value="TRY">TRY</option>
                                    <option value="USD">USD</option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <span className="mt-2">
                                <FaArrowRight/>
                                </span>
                            </div>
                            <div className="col-md-5">
                                <select name="convert_to" onChange={(e) => setToCurrency(e.target.value)} className="form-control" id="">
                                    <option value="TRY">TRY</option>
                                    <option value="USD">USD</option>
                                </select>
                            </div>
                            <div className="col-md-12 mt-4">
                                <button className="btn btn-warning btn-sm w-100" onClick={exchange}>
                                    Məzənnəyə bax
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            Seçilən valyutalara uyğun cari məzənnə
                        </div>
                        <div className="card-body">
                            {
                                rate ? 
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h1>{rate} {toCurrency}</h1>
                                        <button className="btn btn-primary btn-sm" onClick={reloadForm}>
                                            <FaReplyAll/>
                                            Yenilə
                                        </button>
                                    </div>
                                :
                                <strong className="text-danger">
                                    Zəhmət olmasa çevirmək istədiyiniz dəyəri daxil edin
                                </strong>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrenctComponent