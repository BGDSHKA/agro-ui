import React from "react";
import { Card, Button } from "react-bootstrap";

const Info = () => {
  return (
    <>
      <Card className="text-center">
        <Card.Header>Какой загрузить датасет?</Card.Header>
        <Card.Body>
          <Card.Title>Формат датасета</Card.Title>
          <Card.Text className="text-justify">
            Датасет должен быть быть Excel файлом, который содержит в себе
            заголовки столбцов{" "}
            <b>
              x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12, x13 x14, y1
            </b>{" "}
            и данные в числовом формате. Дробные числа должны разделяться
            точкой.
            <br></br>
            <b>Заголовки соответствуют:</b>
            <br></br>
            <b>x1</b> - № поля
            <br></br>
            <b>x2</b> - Площадь в гектарах
            <br></br>
            <b>x3</b> - Крутизна склона в градусах
            <br></br>
            <b>x4</b> - Уровень плодородия почв (Высокий = 1.2, Средний = 1,
            Низкий = 0.8)
            <br></br>
            <b>x5</b> - Наличие многолетних сорняков в 2020г (+ = 1, - = 0)
            <br></br>
            <b>x6</b> - Статус собственности на 2020г (Собственность = 1,
            Истекает срок = 0)
            <br></br>
            <b>x7</b> - Расстояние до асфальта в км
            <br></br>
            <b>x8</b> - Массив полей (Центр = 1, Восток = 2, Слободка = 3,
            Дальний = 4)
            <br></br>
            <b>x9</b> - Культура в 2018г (Пар = 0, Озимая пшеница = 1, Соя = 2,
            Ячмень = 3, Сахарная свекла = 4)
            <br></br>
            <b>x10</b> - Гербицид в 2018г (Серп = 1, Пропуск = 0)
            <br></br>
            <b>x11</b> - Культура в 2019г (Пар = 0, Озимая пшеница = 1, Соя = 2,
            Ячмень = 3, Сахарная свекла = 4)
            <br></br>
            <b>x12</b> - Гербицид в 2019г (Серп = 1, Пропуск = 0)
            <br></br>
            <b>x13</b> - Культура в 2020г (Пар = 0, Озимая пшеница = 1, Соя = 2,
            Ячмень = 3, Сахарная свекла = 4)
            <br></br>
            <b>x14</b> - Гербицид в 2020г (Серп = 1, Пропуск = 0)
            <br></br>
            <b>y1</b> - Предпочтительная культура к посеву в 2021г
          </Card.Text>
          <Button variant="success" href="Dataset.xlsx" download>
            Скачать пример
          </Button>
        </Card.Body>
      </Card>
      <br></br>
      <Card className="text-center">
        <Card.Header>Для чего это нужно?</Card.Header>
        <Card.Body>
          <Card.Title>
            Приложение рекомендует культуру к посеву на основе данных поля
          </Card.Title>
          <Card.Text className="text-justify">
            Это полностью клиентское приложение разработанное в рамках хакатона
            AgroCode в 2020 году для задачи "Рекомендательный сервис по
            размещению культур на сельскохозяйственных полях". Любой
            пользователь может использовать приложение для получения
            рекомендаций по своим данным.
          </Card.Text>
        </Card.Body>
      </Card>
      <br></br>
      <Card className="text-center">
        <Card.Header>Как это работает?</Card.Header>
        <Card.Body>
          <Card.Title>
            Для прогнозирования был использован алгоритм ID3
          </Card.Title>
          <Card.Text className="text-justify">
            Это легковестный алгоритм для построения деревьев принятия решений,
            позволяющий получить рекомендацию к засеиванию на основе датасета,
            составленным нашей командой с участием эксперта. Полученная модель
            обучена с учётом указанных в задаче ограничений для получения
            максимальной прибыли при засеивании участков.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Info;
