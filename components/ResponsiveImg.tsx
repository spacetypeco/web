export default function ResponsiveImg({ src, format }) {
  const w500 = `${src}-500w.${format}`;
  const w1000 = `${src}-1000w.${format}`;
  const w1500 = `${src}-1500w.${format}`;
  const w2000 = `${src}-2000w.${format}`;

  return (
    <>
      <picture>
        {/* <source media="(min-width: 1500px)" srcSet={w2000} /> */}
        {/* <source media="(min-width: 1000px)" srcSet={`${w1500}, ${w2000} 2x`} /> */}
        <source media="(min-width: 750px)" srcSet={`${w1000}, ${w2000} 2x`} />
        <source media="(min-width: 500px)" srcSet={`${w1000}, ${w1500} 2x`} />
        <img src={w500} srcSet={`${w1000} 2x`} />
      </picture>
    </>
  );
}
