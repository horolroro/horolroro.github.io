<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
	String title = request.getParameter("title");
	String keywords = request.getParameter("keywords");
	String description = request.getParameter("description");
%>
<title><%=title %> | Natural benefits from Jeju, innisfree</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="Author" content="innisfree.co.kr">
<meta name="title" content="innisfree">
<meta name="keywords" content="<%=keywords %>">
<meta name="description" content="<%=description %>">
<link href="/resources/web2/images/common/favicon.ico" rel="shortcut icon">
<link rel="stylesheet" href="/resources/fonts/fonts.css">
<link rel="stylesheet" href="/resources/web2/css/common.css">
<link rel="stylesheet" href="/resources/web2/css/ui.css">
<link rel="stylesheet" href="/resources/web2/css/ui_add.css">
<script type="text/javascript" src="/resources/common/js/lib/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="/resources/common/js/jquery.util.js"></script>
<script type="text/javascript" src="/resources/web2/js/jquery-ui.min.js"></script>
<script type="text/javascript" src="/resources/web2/js/swiper.min.js"></script>
<script type="text/javascript" src="/resources/web2/js/ui.js"></script>
<script type="text/javascript" src="/resources/web2/js/ui_add.js"></script>
<script type="text/javascript" src="/resources/web2/js/jquery.nicescroll.js"></script>
<!--[if lt IE 9]>
	<script type="text/javascript" src="/resources/web2/js/jquery.bxslider.min.js"></script>
	<script type="text/javascript" src="/resources/web2/js/html5shiv.min.js"></script>
<![endif]-->