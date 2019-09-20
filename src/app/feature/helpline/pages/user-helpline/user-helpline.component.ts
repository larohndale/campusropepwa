import { Component, OnInit } from '@angular/core';
import { Helpline } from 'src/app/core/models/helpline';

@Component({
  selector: 'app-user-helpline',
  templateUrl: './user-helpline.component.html',
  styleUrls: ['./user-helpline.component.scss']
})
export class UserHelplineComponent implements OnInit {

  helplineList: Helpline[] = [
        {
          state: 'National',
          name: 'Womens Helpline',
          description: `National commission for women Complaints related
          to Stalking Cyber crimes against women Free legal aid for women
          Privacy of women Police Apathy against women Violence Against Women
          Dowry Trafficking Acid Attack\r\nDomestic violence Harassment Refusal to register FIR Attempt to rape Rape Sexual Assault Sexual
          harassment etc`,
          phoneNumber: '1901011- 26944880 ,011- 26940148',
          websiteLink: 'http://ncw.nic.in/',
          fileOnlineComplaintLink: 'http://ncwapps.nic.in/onlinecomplaintsv2/frmHome.aspx,https://cybercrime.gov.in/cybercitizen/home.htm',
          facebookLink: 'https://www.facebook.com/NCWIndia',
          twitterLink: 'https://twitter.com/NCWIndia',
          instagramLink: 'https://www.instagram.com/NCWIndia/',
          whatsappLink: ''
        },
        {
          state: 'National',
          name: 'Womens Helpline',
          description: `National commission for women Complaints related
          to Stalking Cyber crimes against women Free legal aid for women
          Privacy of women Police Apathy against women Violence Against Women
          Dowry Trafficking Acid Attack\r\nDomestic violence Harassment Refusal to register FIR Attempt to rape Rape Sexual Assault Sexual
          harassment etc`,
          phoneNumber: '1901011- 26944880 ,011- 26940148',
          websiteLink: 'http://ncw.nic.in/',
          fileOnlineComplaintLink: 'http://ncwapps.nic.in/onlinecomplaintsv2/frmHome.aspx,https://cybercrime.gov.in/cybercitizen/home.htm',
          facebookLink: 'https://www.facebook.com/NCWIndia',
          twitterLink: 'https://twitter.com/NCWIndia',
          instagramLink: 'https://www.instagram.com/NCWIndia/',
          whatsappLink: ''
        },
        {
          state: 'National',
          name: 'Womens Helpline',
          description: `National commission for women Complaints related
          to Stalking Cyber crimes against women Free legal aid for women
          Privacy of women Police Apathy against women Violence Against Women
          Dowry Trafficking Acid Attack\r\nDomestic violence Harassment Refusal to register FIR Attempt to rape Rape Sexual Assault Sexual
          harassment etc`,
          phoneNumber: '1901011- 26944880 ,011- 26940148',
          websiteLink: 'http://ncw.nic.in/',
          fileOnlineComplaintLink: 'http://ncwapps.nic.in/onlinecomplaintsv2/frmHome.aspx,https://cybercrime.gov.in/cybercitizen/home.htm',
          facebookLink: 'https://www.facebook.com/NCWIndia',
          twitterLink: 'https://twitter.com/NCWIndia',
          instagramLink: 'https://www.instagram.com/NCWIndia/',
          whatsappLink: ''
        },
  ];

  constructor() { }

  ngOnInit() {
  }

}
