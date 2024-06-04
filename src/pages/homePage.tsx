export const HomePage = () => {
  const urlArr = [
    {
      name: "צבוע מפוספס",
      url: "https://www.makorrishon.co.il/wp-content/uploads/2019/10/UZI-DGANI-%D7%A6%D7%91%D7%95%D7%A2-%D7%9E%D7%A4%D7%95%D7%A1%D7%A4%D7%A1-%D7%91%D7%99%D7%A9%D7%A8%D7%90%D7%9C-13.jpg",
    },
    {
      name: "תן זהוב",
      url: "https://res.cloudinary.com/roundglass/image/upload/w_1104,h_736,c_fill/q_auto:best,f_auto/v1600081957/roundglass/sustain/jackal-close-up-dhritiman-mukherjee_gxcvdx.jpg",
    },
    {
      name: "זאב אפור",
      url: "https://www.parks.org.il/wp-content/themes/joomi/inc/imgp.php?src=https://static.parks.org.il/wp-content/uploads/2021/02/%D7%9E%D7%96%D7%95%D7%9F-%D7%96%D7%9E%D7%99%D7%9F-%D7%A8%D7%91-%D7%A9%D7%9E%D7%A7%D7%95%D7%A8%D7%95-%D7%91%D7%A4%D7%A1%D7%95%D7%9C%D7%AA-%D7%A9%D7%9C-%D7%94%D7%90%D7%93%D7%9D-%D7%92%D7%95%D7%A8%D7%9D-%D7%9C%D7%96%D7%90%D7%91%D7%99%D7%9D-%D7%9C%D7%94%D7%A1%D7%AA%D7%95%D7%91%D7%91-%D7%9C%D7%99%D7%93-%D7%94%D7%99%D7%99%D7%A9%D7%95%D7%91%D7%99%D7%9D.-%D7%A6%D7%99%D7%9C%D7%95%D7%9D-%D7%93%D7%95%D7%A8%D7%95%D7%9F-%D7%A0%D7%99%D7%A1%D7%99%D7%9D.jpg&width=1176&co=8&q=60",
    },
    {
      name: "שועל מצוי",
      url: "https://www.masa.co.il/wp-content/uploads/2019/07/fox-gallery10.jpg",
    },
    {
      name: "שועל מצוי",
      url: "https://www.masa.co.il/wp-content/uploads/2019/07/fox-gallery10.jpg",
    },
    {
      name: "שועל מצוי",
      url: "https://www.masa.co.il/wp-content/uploads/2019/07/fox-gallery10.jpg",
    },
    {
      name: "שועל מצוי",
      url: "https://www.masa.co.il/wp-content/uploads/2019/07/fox-gallery10.jpg",
    },
    {
      name: "שועל מצוי",
      url: "https://www.masa.co.il/wp-content/uploads/2019/07/fox-gallery10.jpg",
    },
    {
      name: "שועל מצוי",
      url: "https://www.masa.co.il/wp-content/uploads/2019/07/fox-gallery10.jpg",
    },
    {
      name: "שועל מצוי",
      url: "https://www.masa.co.il/wp-content/uploads/2019/07/fox-gallery10.jpg",
    },
    {
      name: "שועל מצוי",
      url: "https://www.masa.co.il/wp-content/uploads/2019/07/fox-gallery10.jpg",
    },
    {
      name: "שועל מצוי",
      url: "https://www.masa.co.il/wp-content/uploads/2019/07/fox-gallery10.jpg",
    },
    {
      name: "שועל מצוי",
      url: "https://www.masa.co.il/wp-content/uploads/2019/07/fox-gallery10.jpg",
    },
  ];

  return (
      <div dir="rtl" className="h-full flex justify-start content-start flex-wrap gap-4 pr-4 pt-4">
        {urlArr.map((image) => (
          <div className="rounded-lg shadow-md grid text-center">
            <img className="w-[200px] rounded-t-lg" src={image.url} />
            <span className="h-32 text-lg">{image.name}</span>
          </div>
        ))}
      </div>
  );
};
