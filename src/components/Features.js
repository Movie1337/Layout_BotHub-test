import React from "react";
import styled from "styled-components";

const FeaturesContainer = styled.div`
  color: #ffffff;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 32px;
  margin-bottom: 40px;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 85px;
  gap: 30px;
`;

const Card = styled.div`
  background: linear-gradient(
    142.87deg,
    #1c64f2 0%,
    rgba(28, 100, 242, 0) 44.17%
  );
  padding: 0 20px;
  border-radius: 12px;
  width: 360px;
  height: 220px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const CardTitle = styled.h3`
  font-size: 22px;
  margin-bottom: 15px;
`;

const CardDescription = styled.p`
  font-size: 16px;
  color: #c0c0c0;
`;

const ImageTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 120px;
`;

const Image = styled.img`
  width: 300px;
  border-radius: 8px;
`;

const TextContainer = styled.div`
  max-width: 500px;
`;

const ImageTitle = styled.h3`
  font-size: 34px;
  font-weight: 600;
  line-height: 44px;
  text-align: left;
  margin-bottom: 20px;
`;

const ImageDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  margin-bottom: 20px;
`;

const ImageButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056e0;
  }
`;

const Features = () => {
  return (
    <FeaturesContainer>
      <Title>Возможности ChatGPT</Title>
      <CardsContainer>
        <Card>
          <CardTitle>Создание увлекательного контента</CardTitle>
          <CardDescription>
            Вы когда-нибудь мечтали написать интересную книгу или статью, но не
            знали, с чего начать? ChatGPT отлично справляется с генерацией
            текстов на любые темы. Опишите ему свою идею - и он создаст
            увлекательный контент, который захватит внимание читателей.
          </CardDescription>
        </Card>
        <Card>
          <CardTitle>Решение сложных задач</CardTitle>
          <CardDescription>
            Задачи по математике или программированию иногда кажутся
            неразрешимыми головоломками. Но не для ChatGPT! Он проанализирует
            проблему и предложит пошаговое решение. Вы быстро разберетесь в
            сложных концепциях благодаря его доступным объяснениям.
          </CardDescription>
        </Card>
        <Card>
          <CardTitle>Разработка и отладка кода</CardTitle>
          <CardDescription>
            ChatGPT может помочь в написании и исправлении кода. Он
            проанализирует ваш код, найдет ошибки и предложит способы их
            исправления. Также ChatGPT способен самостоятельно писать код по
            вашим указаниям - к примеру, для создания веб-сайта или приложения.
          </CardDescription>
        </Card>
        <Card>
          <CardTitle>Перевод текстов между языками</CardTitle>
          <CardDescription>
            ChatGPT отлично справляется с переводом текстов на десятки языков.
            Теперь вам не нужно тратить время на поиск переводчика - просто
            попросите ChatGPT, и он мгновенно переведет любой текст на нужный
            вам язык.
          </CardDescription>
        </Card>
        <Card>
          <CardTitle>Помощь в написании резюме</CardTitle>
          <CardDescription>
            Вы ищете новую работу и нуждаетесь в резюме, которое произведет
            впечатление на работодателя? ChatGPT поможет создать резюме,
            идеально подходящее под ваши навыки и опыт. Опишите ему желаемую
            вакансию - и получите готовое резюме в нужном формате.
          </CardDescription>
        </Card>
        <Card>
          <CardTitle>Виртуальный помощник в жизни</CardTitle>
          <CardDescription>
            Не знаете, как приготовить новое блюдо или спланировать отпуск?
            Просто спросите ChatGPT! Он выступит в качестве виртуального
            помощника в повседневных задачах, предоставив полезную информацию и
            рекомендации в любой сфере жизни.
          </CardDescription>
        </Card>
      </CardsContainer>
      <ImageTextContainer>
        <Image src="src/img/img-block.png" alt="AI image" />
        <TextContainer>
          <ImageTitle>Генерация Изображений Через Midjourney </ImageTitle>
          <ImageDescription>
            MidJourney - инструмент для создания уникальных изображений. Наши
            алгоритмы помогут вам воплотить в жизнь вашу идею. Начните
            генерировать изображения с MidJourney прямо сейчас! Кликните на
            кнопку ниже, чтобы начать творить.
          </ImageDescription>
          <ImageButton>Подробнее о Midjourney</ImageButton>
        </TextContainer>
      </ImageTextContainer>
    </FeaturesContainer>
  );
};

export default Features;
