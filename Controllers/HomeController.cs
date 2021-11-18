using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using System.Data;

namespace InvoiceGeneration.Controllers
{
    public class HomeController : Controller
    {
        private readonly IConfiguration _Configuration;

        public HomeController(IConfiguration configuration)
        {
            _Configuration = configuration;
        }

        [Route("")]
        public IActionResult wcclg()
        {
            return View();
        }
    }
}
