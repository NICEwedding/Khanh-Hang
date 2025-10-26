/* config.js - cấu hình dễ chỉnh
   Nếu anh có iframe embed chính xác từ Google Maps (Share > Embed a map),
   paste src vào mapEmbed. Nếu không, mapEmbed để trống và script sẽ
   hiển thị một bản đồ tìm kiếm bằng mapUrl.
*/
const WEDDING_CONFIG = {
  groomName: "Hữu Khánh    ",
  brideName: "  Thúy hằng ",

  weddingDate: "11/06/2025  11:00:00",
  location: "Tại Địa chỉ:Nhà Văn Hoá Thôn Tân Hà, Xã Duyên Hà, Thanh Trì, Hà Nội",

  // link mở ngoài (mở app Google Maps trên điện thoại)
  mapUrl: "https://www.google.com/maps/place/Nh%C3%A0+v%C4%83n+ho%C3%A1+th%C3%B4n+T%C3%A2n+H%C3%A0/@20.9194791,105.8668947,899m/data=!3m1!1e3!4m6!3m5!1s0x3135adb51931be5f:0x19fb72f3c5cf36af!8m2!3d20.9195426!4d105.8687421!16s%2Fg%2F11lrr39nk9?hl=vi&entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D",

  // link embed hiển thị trực tiếp trong trang
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.2355498701654!2d105.86689470644227!3d20.919479091053002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135adb51931be5f%3A0x19fb72f3c5cf36af!2zTmjDoCB2xINuIGhvw6EgdGjDtG4gVMOibiBIw6A!5e1!3m2!1svi!2s!4v1761503718861!5m2!1svi!2s",

  heroImage: "assets/hero-cover.jpg",
  doorLeft: "assets/A.png",
  doorRight: "assets/B.png",

  music: "assets/Music.mp3",

  effectImage: "assets/effect.png",
  effectEnabled: true,

  videoUrl: "https://www.youtube.com/embed/mYTe-XVcJY",

  gallery: [
    {src:"assets/g1.jpg"},
    {src:"assets/g2.jpg"},
    {src:"assets/g3.jpg"},
    {src:"assets/g4.jpg"},
    {src:"assets/g5.jpg"},
    {src:"assets/g6.jpg"},
    {src:"assets/g7.jpg"},
    {src:"assets/g8.jpg"},
    {src:"assets/g9.jpg"},
    {src:"assets/g10.jpg"},
	{src:"assets/g11.jpg"},
    {src:"assets/g12.jpg"},
    {src:"assets/g13.jpg"},
    {src:"assets/g14.jpg"},
	{src:"assets/g15.jpg"},
    {src:"assets/g16.jpg"}
  ],

  invitation: {
    groomSide: {
      avatar: "assets/g1.jpg",
      name: "Hữu Khánh ",
      parents: "Bố:Phạm Hữu Dũng<br>Mẹ: Bùi Thị Thuý -",
      address: "Địa chỉ:Thôn 1, Đông Mỹ, Thanh Trì, Hà Nội"
    },
    brideSide: {
      avatar: "assets/g2.jpg",
      name: "Thúy hằng ",
      parents: "Bố: Lê Văn Luận<br>Mẹ: Trịnh Thị Tâm",
      address: "Địa chỉ:TDP2, Quý Lộc, Yên Định, Thanh Hoá"
    }
  },

  qr: [

  ],
};
