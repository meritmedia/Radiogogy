<%@ Page Title="MusIndex.com" Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="musindex._Default" %>



<!DOCTYPE html>

<html lang="en">
<head runat="server">
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><%: Page.Title %> | Artists with Benefits</title>

    <meta name="robots" content="index, follow" />
    <meta name="description" content="Registry for benefit event coordinators and entertainers" />
    <meta name="keywords" content="music, benefit, non-profits, nonprofit, entertainment, bands coordinator, sponsor,support, cause" />
    <meta name="language" content="English" />
    <meta name="author" content="Charlie Pecot" />
    <meta name="copyright" content="2017" />
    <meta name="revisit-after" content="1 day" />
    <meta name="reply-to" content="support@musindex.com" />
    <meta name="document-class" content="Living Document" />
    <meta name="document-classification" content="" />
    <meta name="document-rights" content="Copyrighted Work" />
    <meta name="document-type" content="Web Page" />
    <meta name="document-rating" content="Safe for Kids" />
    <meta name="document-distribution" content="Global" />
    <meta name="document-state" content="Dynamic" />
    <meta name="cache-control" content="Public" />
    <meta name="Publisher" content="MeritMedia" />
    <meta name="Publisher-Email" content="info@meritmedia.com" />
    <meta name="Placename" content="MeritMedia" />
    <meta name="Contributors" content="Merit Media" />

    <meta property="og:url"                content="https://fb.beatfreaks.com/musindex/default.aspx" />
    <meta property="og:type"               content="website" />
    <meta property="og:title"              content="MusIndex.com - Artists with Benefits" />
    <meta property="og:description"        content="Registry for Bands and Benefit Event Coordinators - Search for a benefit, search for entertainment." />
    <meta property="og:image"              content="https://fb.beatfreaks.com/musindex/images/fb-musindexLogox200.jpg" />
    <meta property="fb:app_id"             content="397759553599056"  />

    
    <meta name="twitter:card" content="summary">
    <meta name="twitter:site" content="@musindex">
    <meta name="twitter:description" content="A registry for benefit event coordinators and bands">
    <meta name="twitter:app:country" content="US">
    <meta name="twitter:creator" content="@meritmediaus">
    <meta name="twitter:title" content="MusIndex.com - Artists with Benefits">

    <meta name="twitter:image" content="https://fb.beatfreaks.com/musindex/images/fb-musindexLogox200.jpg">

    <asp:PlaceHolder runat="server">
        <%: Scripts.Render("~/bundles/modernizr") %>
    </asp:PlaceHolder>

    <webopt:BundleReference runat="server" Path="~/Content/css" />
    <link href="~/favicon.ico" rel="shortcut icon" type="image/x-icon" />
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">

</head>
<body>
    <form runat="server">
        <asp:ScriptManager runat="server">
            <Scripts>
                <%--To learn more about bundling scripts in ScriptManager see https://go.microsoft.com/fwlink/?LinkID=301884 --%>
                <%--Framework Scripts--%>
                <asp:ScriptReference Name="MsAjaxBundle" />
                <asp:ScriptReference Name="jquery" />
                <asp:ScriptReference Name="bootstrap" />
                <asp:ScriptReference Name="respond" />
                <asp:ScriptReference Name="WebForms.js" Assembly="System.Web" Path="~/Scripts/WebForms/WebForms.js" />
                <asp:ScriptReference Name="WebUIValidation.js" Assembly="System.Web" Path="~/Scripts/WebForms/WebUIValidation.js" />
                <asp:ScriptReference Name="MenuStandards.js" Assembly="System.Web" Path="~/Scripts/WebForms/MenuStandards.js" />
                <asp:ScriptReference Name="GridView.js" Assembly="System.Web" Path="~/Scripts/WebForms/GridView.js" />
                <asp:ScriptReference Name="DetailsView.js" Assembly="System.Web" Path="~/Scripts/WebForms/DetailsView.js" />
                <asp:ScriptReference Name="TreeView.js" Assembly="System.Web" Path="~/Scripts/WebForms/TreeView.js" />
                <asp:ScriptReference Name="WebParts.js" Assembly="System.Web" Path="~/Scripts/WebForms/WebParts.js" />
                <asp:ScriptReference Name="Focus.js" Assembly="System.Web" Path="~/Scripts/WebForms/Focus.js" />
                <asp:ScriptReference Name="WebFormsBundle" />
                <%--Site Scripts--%>
            </Scripts>
        </asp:ScriptManager>
        <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    <script type="text/javascript" src="https://fb.beatfreaks.com/scripts/meritmedia.js"></script>
    <script type="text/javascript">page_access(document.URL);</script>
    </form>
    <%--<div class="navbar navbar-fixed-top navbar-inverse">--%>
    <header>
        <div class="navbar">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" runat="server" href="~/">
                        <img src="images/logo.png" alt="the Musicians Index: MusIndex.com" /></a>
                </div>
                <div class="navbar-collapse collapse">

                    <ul class="nav navbar-nav">
                        <li><a runat="server" href="~/">Home</a></li>
                        <li><a runat="server" href="#about" class="myLinker">About</a></li>
                        <li><a runat="server" href="#contact" class="myLinker">Contact</a></li>
                        <li><a runat="server" href="#usage" class="myLinker">Usage</a></li>
                        <li><a runat="server" href="#fbShare" class="myLinker">Share</a></li>
                    </ul>
                </div>
                <h2>Artists with Benefits.</h2>
                <div id="intro">
                    <b>REGISTER HERE</b> if you are an artist looking to donate a performance for a cause, or you are 
                    hosting a benefit and need entertainment.
                </div>
                <div class="subMenu">
                    <span id="eventNavBtn2" style="padding: 4pt;"><a href="#">Event Coordinators Menu</a></span>
                    |&nbsp;<span id="artistNavBtn2" style="padding: 4pt;"><a href="#">Artists Menu</a></span>

                </div>
                <div class="actions">
                    <div class="row">
                        <div class="col-md-12">
                            <div id="eventCoordinatorNav" class="classMenu">
                                <div class="actionHd">Event Coordinators</div>
                                <span class="regEvent">Register</span>
                                <span class="findAct">Search Artists</span>
                            </div>

                            <div id="artistNav" class="classMenu">
                                <div class="actionHd">Artists</div>
                                <span class="regAct">Register</span>
                                <span class="findEvent">Search Events</span>
                            </div>
                        </div>

                    </div>
                </div>

                <div id="section2" class="mySections">
                    <div>Your Previous Submissions</div>
                    <div id="submissions"></div>
                </div>



            </div>
        </div>

    </header>


    <div id="mainForms" class="body-content container">
        <div class="row">
            <div class="col-md-12">
                <div id="EventFormReg" class="initForm">
                    <h1>EventFormReg</h1>
                </div>
                <div id="EventFormSearch" class="initForm">
                    <h1>EventFormSearch</h1>
                </div>
                <div id="ActFormReg" class="initForm">
                    <h1>ActFormReg</h1>
                </div>
                <div id="ActFormSearch" class="initForm">
                    <h1>ActFormSearch</h1>
                </div>
            </div>
        </div>
        <div id="about" class="mySections">
            <p></p>
            <p></p>
        </div>


        <div id="contact" class="mySections"></div>


        <div id="usage" class="mySections"></div>


        <footer>
            
            <div id="fbShare" class="fb-share-button" data-href="https://apps.facebook.com/musindex" data-layout="button" data-size="large" data-mobile-iframe="true"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fapps.facebook.com%2Fmusindex&amp;src=sdkpreparse">Share</a></div>
            <p>&copy; <%: DateTime.Now.Year %> - MusIndex.com</p>
        </footer>
    </div>


    <div id="stickyHeader">
        <div class="navbar">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" runat="server" href="~/">
                        <img src="images/logo.png" alt="the Musicians Index: MusIndex.com" /></a>
                </div>
                <div class="navbar-collapse collapse">

                    <ul class="nav navbar-nav">
                        <li><a runat="server" href="~/">Home</a></li>
                        <li><a runat="server" href="#about" class="myLinker">About</a></li>
                        <li><a runat="server" href="#" id="eventNavBtn" class="navBtn">Event Coordinators</a></li>
                        <li><a runat="server" href="#" id="artistNavBtn" class="navBtn">Artists</a></li>
                        <li><a runat="server" href="#" id="submissionsNavBtn" class="navBtn">Edit Submissions</a></li>
                        <li><a runat="server" href="#contact" class="myLinker">Contact</a></li>
                        <li><a runat="server" href="#usage" class="myLinker">Usage</a></li>
                        <li><a runat="server" href="#fbShare" class="myLinker">Share</a></li>
                    </ul>
                </div>


            </div>
        </div>


    </div>
    <div id="overlay"></div>
    <script src="Scripts/default.js"></script>
</body>
</html>

