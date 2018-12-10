using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyWebApi.Models;

namespace MyWebApi.Controllers
{
    public class SampleDataController : Controller
    {
        public IActionResult Get(SampleDatas analyzerFilterData)
        {
            //var data = new NetworkTrafficApiQueryString(analyzerFilterData);
            //var analyzerRecords = new FetchDataFromExternalApi(_glassClient, _iConfiguration);
            //var response = analyzerRecords.Call(data, CurrentUser.CompanyUrn);
            return Ok(response);
        }
    }
}