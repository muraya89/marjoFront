import moment from "moment/moment";
import mime from "mime-types";
const CrytoJs = require("crypto-js");
// import { fromBuffer } from 'file-type'

class Helper {
  isEmpty(obj) {
    for (var prop in obj) {
      // eslint-disable-next-line no-prototype-builtins
      if (obj.hasOwnProperty(prop)) return false;
    }
    return true;
  }

  prepareFormData(formData) {
    const data = new FormData();
    for (const key in formData) {
      if (formData[key] === null) formData[key] = "";
      data.append(key, formData[key]);
    }
    return data;
  }

  stringify(object) {
    for (const key in object) {
      if (typeof object[key] === "object") {
        object[key] = JSON.stringify(object[key]);
      }
    }
    return object;
  }

  getFileIconColor(fileName) {
    if (!fileName) return "#727071";
    const fileExtension = fileName.split(".").pop();
    switch (fileExtension) {
      case "docx":
        return "#0276c0";
      case "pdf":
        return "#e62f34";
      case "pptx":
        return "#f39301";
      case "xls":
        return "#82bd8d";
      case "xlsx":
        return "#82bd8d";
      case "png":
        return "#a7ce59";
      case "jpg":
        return "#a7ce59";
      default:
        return "#727071";
    }
  }

  getFileIcon(fileName) {
    if (!fileName) return "fa fa-file-o";
    const fileExtension = fileName.split(".").pop();
    switch (fileExtension) {
      case "docx":
        return "fa fa-file-word";
      case "pdf":
        return "fa fa-file-pdf";
      case "pptx":
        return "fa fa-file-powerpoint";
      case "xls":
        return "fa fa-file-excel";
      case "xlsx":
        return "fa fa-file-excel";
      case "png":
        return "fa fa-file-image";
      case "jpg":
        return "fa fa-file-image";
      default:
        return "fa fa-file";
    }
  }

  getEntryDateFormat(date) {
    return moment(date).format("Do dddd, MMM YYYY hh:mm:ss a");
  }

  getDateFormat(date) {
    return moment(date).format("Do, MMM YYYY");
  }

  getTimeFormat(time) {
    return moment(time, "HH:mm:ss").format("hh:mm A");
  }

  detectMimeType(b64) {
    const signatures = {
      JVBERi0: "application/pdf",
      iVBORw0KGgo: "image/png",
      "/9j/": "image/jpg",
    };
    for (var s in signatures) {
      if (b64.indexOf(s) === 0) {
        return signatures[s];
      }
    }
  }

  fileExtension(b64) {
    const signatures = {
      JVBERi0: ".pdf",
      iVBORw0KGgo: ".png",
      "/9j/": ".jpeg",
    };
    for (var s in signatures) {
      if (b64.indexOf(s) === 0) {
        return signatures[s];
      }
    }
  }

  toBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
  encode(value) {
    return window.btoa(value);
  }
  decode(value) {
    return window.atob(value);
  }
  /** Get File Blob */
  async getFileBlob(url, fileName) {
    const response = await fetch(url);
    const data = await response.blob();
    const metadata = {
      type: mime.lookup(url),
    };
    return new File([data], fileName, metadata);
  }
  encrypt(value) {
    return CrytoJs.AES.encrypt(
      value,
      process.env.VUE_APP_AES_ALGORITHM_KEY,
      160
    ).toString();
  }
  decrypt(value) {
    return CrytoJs.AES.decrypt(
      value,
      process.env.VUE_APP_AES_ALGORITHM_KEY
    ).toString(CrytoJs.enc.Utf8);
  }
  status() {
    return {
      new: "deep-orange lighten-1",
      draft: "indigo lighten-1",
      pending: "orange lighten-1",
      returned: "teal lighten-1",
      open: "amber lighten-1",
      accepted: "primary",
      declined: "red lighten-1",
      rejected: "red accent-4",
      posted: "cyan lighten-1",
      approved: "primary",
      released: "primary",
      UnitBooking: "red",
    };
  }
  getColor(status) {
    let colorObject = {};
    switch (status) {
      case "Open":
      case "Draft":
        colorObject = {
          icon_color: "amber lighten-1",
          icon: "error_outline",
          color: "warning",
        };
        break;
      case "Returned":
        colorObject = {
          icon_color: "orange lighten-1",
          icon: "rate_review",
          color: "orange",
        };
        break;
      case "Pending":
      case "Pending Approval":
        colorObject = {
          icon_color: "yellow darken-1",
          icon: "rate_review",
          color: "yellow darken-2",
        };
        break;
      case "Released":
      case "Issued":
        colorObject = {
          icon_color: "green lighten-1",
          icon: "done",
          color: "success",
        };
        break;
      case "Posted":
        colorObject = {
          icon_color: "teal lighten-1",
          icon: "done",
          color: "teal accent-3",
        };
        break;
      case "Approved":
        colorObject = {
          icon_color: "green lighten-1",
          icon: "done",
          color: "success",
        };
        break;
      case "Rejected":
      case "Declined":
      case "Canceled":
        colorObject = {
          icon_color: "deep-orange lighten-1",
          icon: "close",
          color: "red",
        };
        break;
      default:
        colorObject = {
          icon_color: "blue lighten-1",
          icon: "new_releases",
          color: "info",
        };
        break;
    }
    return colorObject;
  }
}
export default new Helper();
