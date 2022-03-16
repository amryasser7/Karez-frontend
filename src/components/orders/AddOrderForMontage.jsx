import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import AppInput from '../common/input/Input'

import restHelper from "../../helpers/RestHelper";
import appConfig from "../../config.json";

import "./AddOrderForMontage.css"

export default function AddOrderForMontage() {

    const [montage, setMontage] = useState({})
    const [formData, setFormData] = useState({});

    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        let url =
            restHelper.getURLPrefix(appConfig.host) +
            appConfig.services.montages.getMontageById;

        restHelper
            .getRequest(url + id)
            .then((res) => {
                setMontage({ ...res.data });
            })
            .catch((err) => {
                alert("برجاء اعادة المحاولة");
            });

    }, [])

    const handleChange = (text, key) => {
        let keys = "";
        if (key.indexOf("-") > 0) keys = key.substr(0, key.indexOf("-"));
        else keys = key;
        let newFormData = { ...formData };
        newFormData[keys] = text;
        setFormData(newFormData);
    };

    const handleSubmit = () => {
        // new order

        formData.montage_id = id;

        const url =
            restHelper.getURLPrefix(appConfig.host) +
            appConfig.services.orders.newOrder;


        restHelper
            .postRequest(url, formData)
            .then((res) => {
                navigateToAllCustomers()
            })
            .catch((err) => {
                alert("لم نتمكن من ادخال");
            });

    }

    const navigateToAllCustomers = () => {
        const location = { pathname: "/admin/customers" }
        history.replace(location)
    }

    return (
        <div className='main_container'>
            <div className="inputs_container">
                <div className="inputs_section">
                    <div>
                        <div className="part">
                            <div className="inputs_label">اسم العمل</div>
                            <AppInput
                                id="job_name"
                                inputClassName="input"
                                InputProps={{ disableUnderline: true }}
                                value={montage.job_name}
                            />
                        </div>
                        <div className="part">
                            <div className="inputs_label">كود سكينا </div>
                            <AppInput
                                id="skina_code"
                                inputClassName="input"
                                InputProps={{ disableUnderline: true }}
                                value={montage.skina_code}
                            />
                        </div>
                        <div className="part">
                            <div className="inputs_label">APS</div>
                            <AppInput
                                id="aps"
                                inputClassName="input"
                                InputProps={{ disableUnderline: true }}
                                value={montage.aps}
                            />
                        </div>
                        <div className="part">
                            <div className="inputs_label">اللون</div>
                            <AppInput
                                id="color"
                                inputClassName="input"
                                InputProps={{ disableUnderline: true }}
                                value={montage.color}
                            />
                        </div>
                        <div className="part">
                            <div className="inputs_label">دارافيل</div>
                            <AppInput
                                id="darafel"
                                inputClassName="input"
                                InputProps={{ disableUnderline: true }}
                                value={montage.darafel}
                            />
                        </div>
                    </div>
                    <div className="column">
                        <div className="part">
                            <div className="inputs_label">نوع</div>
                            <AppInput
                                id="type"
                                inputClassName="input"
                                InputProps={{ disableUnderline: true }}
                                value={montage.type}
                            />
                        </div>
                        <div className="part">
                            <div className="inputs_label"> اتجاه جر</div>
                            <AppInput
                                id="etgah_el_gar"
                                inputClassName="input"
                                InputProps={{ disableUnderline: true }}
                                value={montage.etgah_el_gar}
                            />
                        </div>
                        <div className="part">
                            <div className="inputs_label">فجوة </div>
                            <AppInput
                                id="gap"
                                inputClassName="input"
                                InputProps={{ disableUnderline: true }}
                                value={montage.gap}
                            />
                        </div>
                        <div className="part">
                            <div className="inputs_label">لون خاص</div>
                            <AppInput
                                id="special_color"
                                inputClassName="input"
                                InputProps={{ disableUnderline: true }}
                                value={montage.special_color}
                            />
                        </div>
                        <div className="part">
                            <div className="inputs_label"> ترس التكسير</div>
                            <AppInput
                                id="tars_el_takser"
                                inputClassName="input"
                                InputProps={{ disableUnderline: true }}
                                value={montage.tars_el_takser}
                            />
                        </div>
                    </div>
                    <div className="column">
                        <div className="part">
                            <div className="inputs_label">كود فرعي </div>
                            <AppInput
                                id="sub_code"
                                inputClassName="input"
                                InputProps={{ disableUnderline: true }}
                                value={montage.sub_code}
                            />
                        </div>
                        <div className="part">
                            <div className="inputs_label">اتجاه عرض</div>
                            <AppInput
                                id="etgah_el_ard"
                                inputClassName="input"
                                InputProps={{ disableUnderline: true }}
                                value={montage.etgah_el_ard}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="inputs_container">
                <div className='data-header'>
                    Order Data
                </div>
                <div className='inputs_section'>
                    <div className='column'>
                        <div className="part">
                            <div className="inputs_label">Quantity</div>
                            <AppInput
                                id="quantity"
                                inputClassName="input"
                                InputProps={{ disableUnderline: true }}
                                value={formData.quantity}
                                onChange={(e) => handleChange(e.target.value, e.target.id)}
                            />
                        </div>
                        <div className="part">
                            <div className="inputs_label">Material Type</div>
                            <AppInput
                                id="material_type"
                                inputClassName="input"
                                InputProps={{ disableUnderline: true }}
                                value={formData.material_type}
                                onChange={(e) => handleChange(e.target.value, e.target.id)}
                            />
                        </div>
                    </div>
                    <div className='column'>
                        <div className="part">
                            <div className="inputs_label">Skina Code New</div>
                            <AppInput
                                id="skina_code_new"
                                inputClassName="input"
                                InputProps={{ disableUnderline: true }}
                                value={formData.skina_code_new}
                                onChange={(e) => handleChange(e.target.value, e.target.id)}
                            />
                        </div>
                        <div className="part">
                            <div className="inputs_label">Lamination</div>
                            <AppInput
                                id="lamination"
                                inputClassName="input"
                                InputProps={{ disableUnderline: true }}
                                value={formData.lamination}
                                onChange={(e) => handleChange(e.target.value, e.target.id)}
                            />
                        </div>
                    </div>
                    <div className='column'>
                        <div className="part">
                            <div className="inputs_label">Job Direction</div>
                            <AppInput
                                id="job_direction"
                                inputClassName="input"
                                InputProps={{ disableUnderline: true }}
                                value={formData.job_direction}
                                onChange={(e) => handleChange(e.target.value, e.target.id)}
                            />
                        </div>
                        <div className="part">
                            <div className="inputs_label">Job/m</div>
                            <AppInput
                                id="job_per_meter"
                                inputClassName="input"
                                InputProps={{ disableUnderline: true }}
                                value={formData.job_per_meter}
                                onChange={(e) => handleChange(e.target.value, e.target.id)}
                            />
                        </div>
                    </div>

                </div>
                <div className='data-header'>
                    Quantity Data
                </div>
                <div className='inputs_section'>
                    <div className='column'>
                        <div className="part">
                            <div className="inputs_label">Sample</div>
                            <AppInput
                                id="sample"
                                inputClassName="input"
                                InputProps={{ disableUnderline: true }}
                                value={formData.sample}
                                onChange={(e) => handleChange(e.target.value, e.target.id)}
                            />
                        </div>
                        <div className="part">
                            <div className="inputs_label">Ordered Roll</div>
                            <AppInput
                                id="order_roll"
                                inputClassName="input"
                                InputProps={{ disableUnderline: true }}
                                value={formData.order_roll}
                                onChange={(e) => handleChange(e.target.value, e.target.id)}
                            />
                        </div>
                    </div>
                    <div className='column'>
                        <div className="part">
                            <div className="inputs_label">Roll per meter</div>
                            <AppInput
                                id="roll_per_meter"
                                inputClassName="input"
                                InputProps={{ disableUnderline: true }}
                                value={formData.roll_per_meter}
                                onChange={(e) => handleChange(e.target.value, e.target.id)}
                            />
                        </div>
                    </div>
                    <div className='column'>
                        <div className="part">
                            <div className="inputs_label">Label/Rolls</div>
                            <AppInput
                                id="label_per_roll"
                                inputClassName="input"
                                InputProps={{ disableUnderline: true }}
                                value={formData.label_per_roll}
                                onChange={(e) => handleChange(e.target.value, e.target.id)}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <button className="customer-submit" onClick={handleSubmit}>اضافة</button>

        </div>
    )
}
