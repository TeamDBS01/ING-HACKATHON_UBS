// import InvestmentAccountOpening from '@/components/customers/accounts/InvestmentAccountOpening';
// import React from 'react';

// export default function Page({ params }: { params: { type: string } }) {
//   return (
//     <div>{params.type}</div>
//     <InvestmentAccountOpening/>
//   );
// }

import React from 'react';
import InvestmentAccountOpening from '@/components/customers/accounts/InvestmentAccountOpening'; 

export default function Page({ params }: { params: { type: string } }) {
  switch (params.type) {
    case 'investment':
      return (
        <div>
          <InvestmentAccountOpening />
        </div>
      );
    // case 'some-other-type':
    //   return (
    //     <div>
    //       <SomeOtherComponent />
    //     </div>
    //   );
    default:
      return (
        <div>
          {/* You might want to render a default component or an error message here */}
          {/* <div>Type: {params.type}</div>
          <p>Component not found for type: {params.type}</p> */}
          <InvestmentAccountOpening/>
        </div>
      );
  }
}
