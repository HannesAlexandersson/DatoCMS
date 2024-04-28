import { useQuery } from "graphql-hooks";
import ErrorPage from "./ErrorPage";
import LoadingScreen from "./LoadingScreen";
import vector1 from './assets/Vector 1.svg';
import vector2 from './assets/Vector 2.svg';

// A Graphql string which defines what kind of content you'll be fetching
const HOMEPAGE_QUERY = `
{
  pageHeader {
    id
    pageTitle
    _status
    _firstPublishedAt
  }
  headerParagraph{
    id
    paragraphText
  }
  headerImg{
    id
    headerImg{
      url
    }
  }
  
    serviceTitle{
    id
    title
  }
    serviceImg{
      serviceImg{
        id
        url
      }
    }
    allServiceNames{
      id
      serviceName
      servicePrice
    }
    allPersonelProfiles{
      id
      personelName
      personelImg{
        id
        url
      }
      readMore
    }
  

  _allPageHeadersMeta {
    count
  }
}
`;


 

export const HomePage = () => {
    // data, loading and error are exposed from the hook
    const { data, loading, error } = useQuery(HOMEPAGE_QUERY);
    

    if (loading) {
        return <LoadingScreen />;
    }

   /*  if (error) {
        return <ErrorPage />;
    } */

    // Map through all posts and print out the title of each post in a <p>
    return (
      <>
      <div className="page-wrapper"><img src={vector1} className="vector1"/><img src={vector2} className="vector2"/>

        <div className="header-container">

          <div className="header-textContent">
            <h1 className="page-header">{data.pageHeader.pageTitle}</h1>
            <p className="page-txt">{data.headerParagraph.paragraphText}</p>
            <div className="book-btn-wrap">
              <button className="book-btn">Book now</button>
          </div>
          </div>

          <div className="header-img-wrapper">
            <img src={data.headerImg.headerImg.url} className="header-img" />
          </div>

        </div>

      <div className="serviceContainer">
        <div className="serviceTxt-wrapper">
          <h3 className="service-title">{data.serviceTitle.title}</h3>
          {data.allServiceNames.map((service) =>
            <div className="serviceRow" key={service.id}><p>{service.serviceName}</p><p>${service.servicePrice}</p></div>           
          )}
        </div>
        <div className="service-img-wrapper">
          <img className="service-img" src={data.serviceImg.serviceImg.url} />
        </div>
      </div>

      <div className="personel-container">
        <div className="personel-titel">
          <h3>Our hairdressers</h3>
        </div>
        <div className="haidressers">
          {data.allPersonelProfiles.map((personel) =>
            <div className="personel" key={personel.id}>
              <img className="personelImg" src={personel.personelImg.url} />
              <p className="personelName">{personel.personelName}</p>
              <a href="#"><p className="personelLink">Read more</p></a>
              </div>
        )}
        </div>
      </div>

      <div className="spacer"></div>

      </div>
      </>
    )
};