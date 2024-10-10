using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KiểmTraFE.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult ThanhToan()
        {
            return View();
        }

        public ActionResult TổngTien()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}