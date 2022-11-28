import React from 'react';
import styled from 'styled-components';




export const Events = () => {

  return (

    <Wrapper>


      <section id="promotion">
        <div className="row promotion">
          <div className="col-md-3 col-sm-4 col-xs-6 promotion-item">
            <div className="promotion-item-home">
              <a href="https://www.galaxycine.vn/khuyen-mai/thuong-thuc-milo-cung-thay-cung-co">
                <img src="https://cdn.galaxycine.vn/media/2022/11/15/teacherday-digital-300x450_1668506924084.jpg" alt='' className="lazy loaded" data-was-processed="true" /></a>
              
            </div>
          </div>
          <div className="col-md-3 col-sm-4 col-xs-6 promotion-item">
            <div className="promotion-item-home"><a href="https://www.galaxycine.vn/khuyen-mai/u22-vui-ve---bap-nuoc-sieu-hat-de">
              <img src="https://cdn.galaxycine.vn/media/2022/11/1/combo-u22-digital-300x450_1667285239633.jpg" alt=''  className="lazy loaded" data-was-processed="true" /></a>
              
            </div>
          </div>
          <div className="col-md-3 col-sm-4 col-xs-6 promotion-item">
            <div className="promotion-item-home">
              <a href="https://www.galaxycine.vn/khuyen-mai/vnpay-qr-tang-deal-cuc-chay">
                <img src="https://cdn.galaxycine.vn/media/2022/10/14/vnpay_1665735135975.jpg" alt=''  className="lazy loaded" data-was-processed="true" /></a>
              
            </div>
          </div>
          <div className="col-md-3 col-sm-4 col-xs-6 promotion-item">
            <div className="promotion-item-home">
              <a href="https://www.galaxycine.vn/khuyen-mai/tung-deal-ielts---phe-cung-bom-tan">
                <img src="https://cdn.galaxycine.vn/media/2022/10/5/300x450-gc_1664939520575.jpg" alt='' 
                  className="lazy loaded" data-was-processed="true" /></a>
             
            </div>
          </div>
          <div className="col-md-3 col-sm-4 col-xs-6 promotion-item">
            <div className="promotion-item-home">
              <a href="https://www.galaxycine.vn/khuyen-mai/galaxy-cinema---back-to-school-2022">
                <img src="https://cdn.galaxycine.vn/media/2022/10/27/back2shool-digital-300x450-1663573378238_1666859670287.jpg" alt=''  className="lazy loaded" data-was-processed="true" /></a>
              </div>
          </div>
          <div className="col-md-3 col-sm-4 col-xs-6 promotion-item">
            <div className="promotion-item-home">
              <a href="https://www.galaxycine.vn/khuyen-mai/vani-chao-san-giam-ngay-40k">
                <img src="https://cdn.galaxycine.vn/media/2022/9/21/glx-vani-1200x1800_1663745251301.jpg" alt=''  className="lazy loaded" data-was-processed="true" /></a>
              
            </div>
          </div>
          <div className="col-md-3 col-sm-4 col-xs-6 promotion-item">
            <div className="promotion-item-home">
              <a href="https://www.galaxycine.vn/khuyen-mai/zalopay-tang-25k-khi-dat-ve-galaxy">
                <img src="https://cdn.galaxycine.vn/media/2022/11/4/glx-t11-1200x1800_1667571519490.jpg" alt=''  data-was-processed="true" />
              </a>
             
            </div>
          </div>
          <div className="col-md-3 col-sm-4 col-xs-6 promotion-item">
            <div className="promotion-item-home">
              <a href="https://www.galaxycine.vn/khuyen-mai/ngay-tri-an-cua-galaxy-cinema---ngay-thu-hai-dau-tien-moi-thang">
                <img src="https://cdn.galaxycine.vn/media/2022/10/27/nta-t11-2022-digital-300x450_1666859423958.jpg" alt=''  className="lazy loaded" data-was-processed="true" /></a>
              
            </div>
          </div>
          <div className="col-md-3 col-sm-4 col-xs-6 promotion-item">
            <div className="promotion-item-home">
              <a href="https://www.galaxycine.vn/khuyen-mai/xem-cang-nhieu---qua-cang-to">
                <img src="https://cdn.galaxycine.vn/media/2022/8/26/duatopsamsung-digital-300x450_1661486117894.jpg" alt=''  className="lazy loaded" data-was-processed="true" />
              </a>
              
            </div>
          </div>
          <div className="col-md-3 col-sm-4 col-xs-6 promotion-item">
            <div className="promotion-item-home"><a href="https://www.galaxycine.vn/khuyen-mai/happy-day">
              <img src="https://cdn.galaxycine.vn/media/2022/1/17/300x450-1642060360230_1642391019890.jpg" alt=''  className="lazy loaded" data-was-processed="true" /></a>
              
            </div>
          </div>
          <div className="col-md-3 col-sm-4 col-xs-6 promotion-item">
            <div className="promotion-item-home">
              <a href="https://www.galaxycine.vn/khuyen-mai/galaxy-cinema-tri-an-thanh-vien">
                <img src="https://cdn.galaxycine.vn/media/2021/1/18/300x450_1610956359573.png" alt=''  className="lazy loaded" data-was-processed="true" />
              </a>
              
            </div>
          </div>
        </div>
      </section>



    </Wrapper>

  );
};

export default Events;

export const Wrapper = styled.div`


.row {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}
.promotion {
  margin: 100px;
}
.promotion-item {
  margin: 10px 0px;
}
.col-xs-6 {
  width: 50%;
}
:after, :before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}


`;
