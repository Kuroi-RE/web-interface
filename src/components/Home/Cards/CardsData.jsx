const CardsData = () => {
  const data_card = [
    {
      id: 1,
      available: false,
      card_name: "Instagram Downloader",
      card_description: "Download a videos from Story, Reel or Post",
      card_path: "/instagram-downloader", // Path link (/instagram or something)
    },
    {
      id: 2,
      available: false,
      card_name: "Tiktok Downloader",
      card_description: "Download a videos from Tiktok, Without Watermark",
      card_path: "/tiktok-downloader", // Path link (/instagram or something)
    },
    {
      id: 3,
      available: true,
      card_name: "Quotes",
      card_description: "Get a random quotes by Anime character!",
      card_path: "/get-quotes", // Path link (/instagram or something)
    },
    {
      id: 4,
      available: true,
      card_name: "Qr Code",
      card_description: "Qr code maker.",
      card_path: "/qrcode-maker", // Path link (/instagram or something)
    },
    {
      id: 5,
      available: true,
      card_name: "Qr Code Scan",
      card_description: "Upload and Scan your QR",
      card_path: "/qrcode-scan", // Path link (/instagram or something)
    },
    {
      id: 6,
      available: true,
      card_name: "Password Generator",
      card_description: "Make a random password",
      card_path: "/password-maker", // Path link (/instagram or something)
    },
    {
      id: 7,
      available: true,
      card_name: "Postal Code",
      card_description: "Search Postal Code from your city or another city",
      card_path: "/postal-code", // Path link (/instagram or something)
    },
    {
      id: 8,
      available: true,
      card_name: "CEK RESI",
      card_description: "Track your delivery receipt",
      card_path: "/cek-resi", // Path link (/instagram or something)
    },
  ];

  return data_card;
};

export default CardsData;
