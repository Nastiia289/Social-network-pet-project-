import React from 'react';
import News from './News/News';
import s from './NewsPage.module.css'

const NewsPage = () => {
  return (
    <div className={s.news}>
      <p className={s.last_news}>Last News</p>
      <News
        image={'https://www.goodnewsnetwork.org/wp-content/uploads/2022/12/talk-to-the-fin-JENNIFER-HADLEY-COMEDY-WILDLIFE-PHOTOGRAPHY-AWARDS-2022.jpg'}
        link={'https://www.manchestereveningnews.co.uk/whats-on/find-out-christmas-character-you-25740524?int_source=nba'}
        title='The Funniest Wildlife Photos of 2022 Win Big Laughs in Comedy Wildlife Photography Awards'
        description='It’s the most popular photography competition in the world—because the winning photos are some the funniest moments of mirth on Earth.'
      />
      <News
        image={'https://a.wayin.com/images/8159/2b7bcb0c-76f9-4683-b4ab-3c3fb4bee122/Christmasdinner281122.jpg'}
        link={'https://www.manchestereveningnews.co.uk/whats-on/food-drink-news/choose-your-ideal-christmas-dinner-25749226'}
        title=' What would be in your ideal Christmas dinner?'
        description='Are pigs in blankets a deal breaker or are you all about the bread sauce?'
      />
      <News
        image={'https://a.wayin.com/images/8159/56395617-64a2-4d68-8a3a-fba0f7acf8dc/Scrooge.jpg'}
        link={'https://www.manchestereveningnews.co.uk/whats-on/find-out-christmas-character-you-25740524?int_source=nba'}
        title='Which Christmas character are you?'
        description='Answer our 9 Christmas questions and we`ll tell you which famous Christmas character you are.'
      />

    </div>
  )
}

export default NewsPage;