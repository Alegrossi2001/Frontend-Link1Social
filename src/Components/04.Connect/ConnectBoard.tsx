import L1ReusableTabs from "../../Styled/L1TabPanel";

export default function ConnectBoard(){
    
    const tabs = [
        {
          label: 'Facebook',
          content: 
            <div>Facebook</div>
          ,
        },
        {
          label: 'Instagram',
          content: 
          <div>Instagram</div>
        },
        {
          label: 'Tiktok',
          content: <div>Content for Tiktok</div>,
        },
        {
            label: 'Linkedin',
            content: <div>Content for Linkedin</div>,
        },
        {
            label: 'X/Twitter',
            content: <div>Content for X</div>,
        },
      ];

    return(
        <L1ReusableTabs tabs={tabs}></L1ReusableTabs>
    )
};