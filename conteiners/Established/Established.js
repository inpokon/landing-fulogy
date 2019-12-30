import React from 'react';
import './Established.scss';
import Title from "../../components/Title/Title";
import Card from "../../components/Card/Card";

const establishedList = [
    {
        code: 'card1',
        title: 'Угловой светильник',
        sizes: ['1.2', '1.86', '0.4'],
        typeOne: 'LED Источник света LUX, дневной',
        typeTwo: 'Встроенный бесконтактный диммер (сенсор)',
        price: 5016
    },
    {
        code: 'card2',
        title: 'Угловой светильник',
        sizes: ['1.33', '1.57', '0.99'],
        typeOne: 'LED Источник света LUX, дневной',
        typeTwo: 'Встроенный бесконтактный диммер (сенсор)',
        price: 7975
    },
    {
        code: 'card3',
        title: 'Угловой светильник',
        sizes: ['1.54', '1.03', '0.9'],
        typeOne: 'LED Источник света LUX, дневной',
        typeTwo: 'Встроенный бесконтактный диммер (сенсор)',
        price: 8176
    },
    {
        code: 'card4',
        title: 'Угловой светильник',
        sizes: ['1.05', '2.1', '1.4'],
        typeOne: 'LED Источник света LUX, дневной',
        typeTwo: 'Встроенный бесконтактный диммер (сенсор)',
        price: 12837
    }
];

const Established = () => {

    return (
        <section className="established-wrap">
            <div className="container">
                <div className="established">
                    <Title classModification="established__title">Установленные светильники:</Title>
                    <div className="established__list">
                        {establishedList.map(item => {
                            return (
                                <Card key={item.code}
                                      codeImg={item.code}
                                      title={item.title}
                                      sizes={item.sizes}
                                      price={item.price}
                                      typeOne={item.typeOne}
                                      typeTwo={item.typeTwo}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Established;
