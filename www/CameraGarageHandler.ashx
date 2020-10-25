<%@ WebHandler Language="C#" Class="CameraGarageHandler" %>

using System;
using System.Web;

public class CameraGarageHandler : IHttpHandler {

    public void ProcessRequest(HttpContext context)
    {
        //System.IO.StreamWriter writer = new System.IO.StreamWriter(context.Server.MapPath("~/test.txt"), true);

        //writer.WriteLine("count:" + context.Request.Files.Count + " FileName: " + context.Request.Files[0].FileName);

        // writer.Close();

        string filePath = "~/CameraGaragePics/";

        //write your handler implementation here.
        if (context.Request.Files.Count <= 0)
        {
            context.Response.Write("No file uploaded");
        }
        else
        {
            for (int i = 0; i < context.Request.Files.Count; ++i)
            {
                HttpPostedFile file = context.Request.Files[i];
                file.SaveAs(context.Server.MapPath(filePath + file.FileName));
                context.Response.Write("File uploaded");
            }
        }
    }

    public bool IsReusable
    {
        get
        {
            return false;
        }
    }

}