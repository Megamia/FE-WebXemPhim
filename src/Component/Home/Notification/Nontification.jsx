import React from "react";
import styles from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';

const Notification = () =>{
    return(
        <div className="bg-[#2D2D2D] w-full  p-[10px] mb-[20px] rounded">
            <div
              className={`bg-[#252525] rounded-[50px]  inline-flex w-[40px] h-[40px] items-center justify-center ${styles.icon}`}
            >
              <span className="text-white text-[20px]">
                <FontAwesomeIcon icon={faBullhorn} />
              </span>
            </div>
            <div className={styles.notification}>
              <ul>
                <li className={`text-[#F3DD3C] ${styles.listItem}`}>
                  Lưu hoặc nhớ ngay link rút gọn
                  <a href="https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/96/68/1616116896/1616116896-1-192.mp4?e=ig8euxZM2rNcNbNM7bdVhwdlhbKjhwdVhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1721189238&gen=playurlv2&os=cosbv&oi=2018263300&trid=4853f5a6ff4d446392d7c08e7c66f803T&mid=3546655628462543&platform=html5&og=cos&upsig=862e7c238e4e0249a77d7b50ba3c633d&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&bw=247185&orderid=0,1&buvid=&build=0&mobi_app=&f=T_0_0&logo=80000000" className="text-white">
                    {' '}bit.ly/TAIHEN{' '}
                  </a>
                  để truy cập khi nhà mạng chặn!
                </li>
                <li className={`text-[#F3DD3C] ${styles.listItem}`}>
                  Mời bạn tham gia Group
                  <a href="https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/96/68/1616116896/1616116896-1-192.mp4?e=ig8euxZM2rNcNbNM7bdVhwdlhbKjhwdVhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1721189238&gen=playurlv2&os=cosbv&oi=2018263300&trid=4853f5a6ff4d446392d7c08e7c66f803T&mid=3546655628462543&platform=html5&og=cos&upsig=862e7c238e4e0249a77d7b50ba3c633d&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&bw=247185&orderid=0,1&buvid=&build=0&mobi_app=&f=T_0_0&logo=80000000" className="text-[#E62117]">
                    {' '}tại đây!{' '}
                  </a>
                  hoặc tham gia Discord
                  <a href="https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/96/68/1616116896/1616116896-1-192.mp4?e=ig8euxZM2rNcNbNM7bdVhwdlhbKjhwdVhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1721189238&gen=playurlv2&os=cosbv&oi=2018263300&trid=4853f5a6ff4d446392d7c08e7c66f803T&mid=3546655628462543&platform=html5&og=cos&upsig=862e7c238e4e0249a77d7b50ba3c633d&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&bw=247185&orderid=0,1&buvid=&build=0&mobi_app=&f=T_0_0&logo=80000000" className="text-[#E62117]">
                    {' '}tại đây!{' '}
                  </a>
                  để ủng hộ{' '}
                  <span className="text-[#E62117]">TAIHEN</span>
                </li>
                <li className={`text-[#F3DD3C] ${styles.listItem}`}>
                  Do thiếu hút kinh phí nên quảng cáo có thể gây khó chịu, rất mong các bạn thông cảm!
                </li>
              </ul>
            </div>
          </div>
    )
}
export default Notification;