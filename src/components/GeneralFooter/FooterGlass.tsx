import React from "react";
import FooterForm from './FooterForm';

export default function FooterGlass(): React.ReactElement {
  return (
    <div className="footerGlass">
      <h2>Տեղադրել հայտարարություն</h2>
      <p>Մուտքագրեք Ձեր տվյալները նշված դաշտերում և մենք կկապնվենք Ձեզ հետ</p>
      <FooterForm />
    </div>
  );
}
