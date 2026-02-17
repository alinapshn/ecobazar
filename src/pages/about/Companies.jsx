// import CompanyImage1 from "../../assets/img/about/company-1.png";
// import CompanyImage2 from "../../assets/img/about/company-2.png";
// import CompanyImage3 from "../../assets/img/about/company-3.png";
// import CompanyImage4 from "../../assets/img/about/company-4.png";
// import CompanyImage5 from "../../assets/img/about/company-5.png";
// import CompanyImage6 from "../../assets/img/about/company-6.png";
// import { ReactComponent as CompanyImage1 } from "../../assets/img/about/company-1.svg";
// import { ReactComponent as CompanyImage2 } from "../../assets/img/about/company-2.svg";
// import { ReactComponent as CompanyImage3 } from "../../assets/img/about/company-3.svg";
// import { ReactComponent as CompanyImage4 } from "../../assets/img/about/company-4.svg";
// import { ReactComponent as CompanyImage5 } from "../../assets/img/about/company-5.svg";
// import { ReactComponent as CompanyImage6 } from "../../assets/img/about/company-6.svg";
import CompanyImage1 from "../../assets/img/about/company-1.svg?react";
import CompanyImage2 from "../../assets/img/about/company-2.svg?react";
import CompanyImage3 from "../../assets/img/about/company-3.svg?react";
import CompanyImage4 from "../../assets/img/about/company-4.svg?react";
import CompanyImage5 from "../../assets/img/about/company-5.svg?react";
import CompanyImage6 from "../../assets/img/about/company-6.svg?react";

import "./companies.scss";

export function Companies() {
  const companies = [
    {
      id: 1,
      Icon: CompanyImage1,
    },
    {
      id: 2,
      Icon: CompanyImage2,
    },
    {
      id: 3,
      Icon: CompanyImage3,
    },
    {
      id: 4,
      Icon: CompanyImage4,
    },
    {
      id: 5,
      Icon: CompanyImage5,
    },
    {
      id: 6,
      Icon: CompanyImage6,
    },
  ];

  return (
    <section className="companies">
      <div className="container">
        <div className="companies__wrapper">
          {companies.map(({ id, Icon }) => (
            <div key={id} className="companies__item">
              <Icon className="companies__item-logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
