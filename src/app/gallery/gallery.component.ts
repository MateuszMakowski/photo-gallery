import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryComponent implements OnInit {
  public innerWidth: any;
  public filteredImages: any[] = [];
  public loadCount = 0;
  public fullScreen = false;
  public fullScreenImg: any;
  public loadMore = false;

  public images: any[] = [];
  public photoIds: any[] = [
    { id: 'XF3QwYu5RyajERPDF5tM3g', alt: 'Dubai' },
    { id: 'isxndhRnQAejPKbjDXRHtQ', alt: 'Dubai' },
    { id: 'jl_wEV-YRliLCcajjOqcEQ', alt: 'Dubai' },
    { id: '664AXzJXQUmhBlMtB9_bCQ', alt: 'Dubai' },
    { id: 'VQ9dUnL9T66GX3v1BNVyrQ', alt: 'Dubai' },
    { id: 'GHEmIpTVSkaGDlkSOMUAjg', alt: 'Dubai' },
    { id: 'XW5lRzsCTrqsXZoPE1t9Xw', alt: 'Dubai' },
    { id: 'KJ-ohW3mQVq9Gjcoov2j5Q', alt: 'Azory' },
    { id: 'N2CgwHeBSRO1T_tOiSFmlg', alt: 'Azory' },
    { id: 'stET7SXgSzeDcdmg21OLjQ', alt: 'Azory' },
    { id: 'aKgnwoyMScqKAHqW6LjpUQ', alt: 'Azory' },
    { id: 'IGPIAqP2Tt2TZAcsjR_62A', alt: 'Azory' },
    { id: 'zhgh1iJVQPaCGIeUeX-8ZA', alt: 'Azory' },
    { id: 'GrRvvU91SYWPAjvq7TFS8g', alt: 'South Coffee' },
    { id: 'NwwQPNVtR4K9YLv8ftUMVg', alt: 'South Coffee' },
    { id: '_6vvqiV-R3SyVcdDtpqm2g', alt: 'South Coffee' },
    { id: 'Cy5ErDSaS82TxA5yDam5oQ', alt: 'South Coffee' },
    { id: 'uAYIkwSgSNeqsHnVEsy1iw', alt: 'Skoda SuperB' },
    { id: 'Ff87V1ywR2yw1vVVTi_kaQ', alt: 'Skoda SuperB' },
    { id: '4Njgl78ZQ9CxzndXWFWw3g', alt: 'Skoda SuperB' },
    { id: 'RLNqjJcYSaKDLAlioLTo1g', alt: 'Skoda SuperB' },
    { id: 'LTg4pkMyTn-a53zyxalKEg', alt: 'Skoda SuperB' },
    { id: 'VTN_5FvkS32BqA-kbtD3Uw', alt: 'Skoda SuperB' },
    { id: 'ZbQG06yWRRKQdO5ORB_kkw', alt: 'Damian Stawicki' },
    { id: 'HzABWS_aSFaoFFm4CjzhCQ', alt: 'Damian Stawicki' },
    { id: 'JOemLeaUThKizdguC3V2QQ', alt: 'Dawid Cechmajster' },
    { id: '_TNk1J7YRrWvX52zdrt8WA', alt: 'Dawid Cechmajster' },
    { id: 'pL-cOLzZRJuNDwJgxLTmpQ', alt: 'Teneryfa' },
    { id: '43nVlVFTRhuReIu1aSi7sw', alt: 'Teneryfa' },
    { id: 'om_4wr9rQtKGw1--jkmafQ', alt: 'Teneryfa' },
    { id: 'tOGB5TNBQ9yTnSfwOIIuNA', alt: 'Teneryfa' },
    { id: 'k--YP3UPSJGsvkP93eofwQ', alt: 'Teneryfa' },
    { id: 'dYXtGebbQsyAmCUla7ItJw', alt: 'Teneryfa' },
    { id: 'uY8MbiwzTJeSgUFr4HDNeg', alt: 'Teneryfa' },
    { id: 'MtHRiESMQmK4BTKQiKvFww', alt: 'Teneryfa' },
    { id: 'i7f_KgBdRce8T8xAaq_5Zw', alt: 'Teneryfa' },
    { id: 'auVburQgQF-glCmt6sEn2Q', alt: 'Teneryfa' },
    { id: 'VSKGdMbTRsG9QsOEJSUB_A', alt: 'Teneryfa' },
    { id: 'AOHovnvNTEi8Qqiwevqu_Q', alt: 'Zanzibar' },
    { id: '0TqbDxpnQAeaPmwE2d4wFw', alt: 'Zanzibar' },
    { id: 'BWlhkGxMTymO1O6xzfMMqA', alt: 'Zanzibar' },
    { id: 'muqqNBcuS9WQ4AnuX-idpg', alt: 'Enduro' },
    { id: 'PZyxKw7qTc2aMkBztMImBg', alt: 'Enduro' },
    { id: 'yA83WsaKQUOmcMk-PCBKrw', alt: 'Enduro' },
    { id: 'J7I-uyCwSZWixaRoGm9y8g', alt: 'Enduro' },
    { id: 'U1zf8ZNRTja1ADkaP0nvtQ', alt: 'Enduro' },
    { id: 'fFsqAXHLSlGDpUP-gBLGlw', alt: 'Austria' },
    { id: 'ZK_hEKNrRqaxJctb1Wrafg', alt: 'Austria' },
    { id: '_v4XtrVoTuGgybGC3C789A', alt: 'Austria' },
    { id: 'D90IodurRuSygZK4HBoy_w', alt: 'Sesja zdjęciowa' },
    { id: 'Zbgy6jYpSdyL8FZm82rcFw', alt: 'Sesja zdjęciowa' },
  ];

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.getPhotos();
    this.sortImages();
  }

  getPhotos() {
    let i = 0;
    this.photoIds.forEach((x: any) => {
      this.images.push({
        Index: i,
        Link:
          'https://thumbnails-photos.amazon.com/v1/thumbnail/' +
          x.id +
          '?viewBox=' +
          this.innerWidth +
          '%2C2160&ownerId=A5AOE1U13JLIO&groupShareToken=EKwPuJ9XTpum9BwzMvu4pw.Ww7_q_G8IeOn_L9T2H9zJL',
        Alt: x.alt,
        IsLoaded: false,
      });
      i++;
    });
  }

  sortImages() {
    if (this.innerWidth > 991) {
      for (let i = 0; i < 4; i++) {
        this.filteredImages.push(this.images.filter((x) => x.Index % 4 === i));
      }
    } else if (991 >= this.innerWidth && this.innerWidth > 768) {
      for (let i = 0; i < 3; i++) {
        this.filteredImages.push(this.images.filter((x) => x.Index % 3 === i));
      }
    } else {
      for (let i = 0; i < 2; i++) {
        this.filteredImages.push(this.images.filter((x) => x.Index % 2 === i));
      }
    }
  }

  onImageLoad(img: any) {
    if (!this.loadMore && this.loadCount < 3) {
      this.loadCount++;
      img.IsLoaded = true;
    } else if (this.loadMore) {
      this.loadCount++;
      img.IsLoaded = true;
    } else {
      img.IsLoaded = true;
    }
  }

  openImageModal(img: any) {
    this.fullScreen = true;
    this.fullScreenImg = this.images.find((x) => x.Index === img);
  }

  closeImageModal() {
    this.fullScreen = false;
  }

  changeImgToPrevious(img: any) {
    if (img > 0) {
      this.fullScreenImg = this.images.find((x) => x.Index === img - 1);
    }
  }

  changeImgToNext(img: any) {
    if (img < this.images.length - 1) {
      this.fullScreenImg = this.images.find((x) => x.Index === img + 1);
    }
  }

  loadMoreClicked() {
    this.loadMore = true;
    this.loadCount = +8;
  }
}
