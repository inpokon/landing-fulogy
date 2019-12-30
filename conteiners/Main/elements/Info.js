import React from 'react';
import Button from "../../../components/Button/Button";

const Info = () => {
    return (
        <div className="main-info">
            <div className="container width50">
                <h1 className="main__title">Премиальные сенсорные светильники для кухни</h1>
                <p className="main__desc">
                    <span>8 лет </span>
                    оснащаем Ваши кухни нашими светильниками
                    по цене производителя.
                </p>
                <div className="main__video">
                        <span className="main__video-desc">
                            <span>Посмотрите </span>
                            видеопрезентацию о наших светильниках!
                        </span>
                </div>
                <Button>
                    Онлайн конструктор
                </Button>
            </div>
        </div>
    )
};

export default Info;
