export interface RollBack {
  name: string;
  mySafPic: string;
  mPesaPic: string;
  mySafUrl: string;
  mPesaUrl: string;
  mySafBio: string;
  mPesaBio: string;
  github: string;
}

export const rollback: RollBack = {
  name: "Roll Back Safaricom's MyOneApp",
  mySafPic: '/apps/mysaf.png',
  mPesaPic: "/apps/mpesa.png",
  mySafUrl: "/apps/M-Pesa.apk",
  mPesaUrl: "/apps/MySafaricom.apk",
  mySafBio: "The old MySafaricom App allowed users to easily manage both M-PESA and mobile services in one place, including sending and receiving money, paying bills and buying goods, purchasing airtime and bundles, and checking balances for airtime, data, and Bonga points. It also supported sharing airtime or data (Sambaza), accessing services like Fuliza and M-Shwari, managing Safaricom Home Fibre, retrieving PUK codes, and handling basic SIM services. For convenience, users could scan scratch cards to top up, save favorite paybills or tills, view offers and promotions, and access customer support through the Zuri assistant.",
  mPesaBio: 'The M-PESA App is mainly focused on mobile money services, allowing users to send and receive money, pay bills and buy goods (Paybill and Till), withdraw cash, and view detailed transaction history. It also supports financial services like Fuliza, M-Shwari, and KCB M-PESA, as well as buying airtime and bundles, managing linked bank accounts or cards, and scanning QR codes for payments. Additionally, users can track expenses, download statements, and access customer support, all within a secure app designed specifically for managing M-PESA transactions.',
  github: 'https://github.com/sirodevs/rollback-myoneapp',
};
