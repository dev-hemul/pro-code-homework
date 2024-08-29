import style from './style.module.css';

function Text_field({ inputValue }) {
  return (
    <div className={style.field}>
      <h2>Тільки два фільми: Стівен Кінг назвав ідеальні адаптації своїх книг</h2>
      <p>Стівен Кінг, чиї твори неодноразово адаптували для кіно та телебачення, розкрив, які фільми найточніше передали суть його книг. Попри численні екранізації, від «Керрі» 1970-х років до майбутнього фільму жахів про вампірів «Салимове Лігво», лише два фільми, на думку автора, повністю відповідають оригінальним текстам.</p>
      <blockquote>«Є декілька фільмів, про які я можу сказати: так, це моя історія. “Залишся зі мною” — один із них, “Втеча із Шоушенка” — інший», — поділився письменник у розмові з виданням Deadline. Він додав, що багато екранізацій його творів принесли йому справжнє задоволення.</blockquote>
      <p className={style.userText}>{inputValue}</p>
    </div>
  );
}

export default Text_field;