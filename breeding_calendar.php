<?php include 'header.php'; ?>
<!-- header area end -->
<div class="main-content-inner">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="white-box">
                    <h2 class="box-title text-center"></h2>
                    <div class="row">
                        <div class="col-md-5 col-lg-3 col-sm-6 col-xs-12">
                            <div class="m-b-15">
                                <div class="row p-20">
                                    <div class="col-md-12 col-xs-12 col-lg-12 col-sm-12">
                                        <b class="text-danger">Breeding date for sows expected to farrow on current date.</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-5 col-lg-3 col-sm-6 col-xs-12 pull-right">
                            <div class="m-b-15">
                                <div class="row p-20">
                                    <div class="col-md-12 col-xs-12 col-lg-12 col-sm-12">
                                        <b class="text-success">Expected farrow date for sows bred on current date.</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card">
                                <div class="row">
                                    <div class="col-md-2 align-items-start">
                                        <div class="form-inline">

                                            <button class="btn btn-outline-primary col-sm-6 p-2" id="previous" onclick="previous()"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                                </svg></button>

                                            <button class="btn btn-outline-primary col-sm-6 p-2" id="next" onclick="next()"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                                </svg></button>
                                        </div>
                                    </div>
                                    <div class="col-md-2 align-items-center">
                                        <button class="btn btn-outline-primary col-sm-6 p-2" id="date_today" onclick="date_today()">Today</button>
                                    </div>
                                    <div class="col-md-8 align-items-end">
                                        <form class="form-inline">
                                            <label class="lead mr-2 ml-2 text-primary" for="month"><strong>Jump To: </strong></label>
                                            <select class="form-control col-sm-4" name="month" id="month" onchange="jump()">
                                                <option value=0>Jan</option>
                                                <option value=1>Feb</option>
                                                <option value=2>Mar</option>
                                                <option value=3>Apr</option>
                                                <option value=4>May</option>
                                                <option value=5>Jun</option>
                                                <option value=6>Jul</option>
                                                <option value=7>Aug</option>
                                                <option value=8>Sep</option>
                                                <option value=9>Oct</option>
                                                <option value=10>Nov</option>
                                                <option value=11>Dec</option>
                                            </select>


                                            <label for="year"></label>
                                            <select class="form-control col-sm-4" name="year" id="year" onchange="jump()">
                                                <option value=2000>2000</option>
                                                <option value=2001>2001</option>
                                                <option value=2002>2002</option>
                                                <option value=2003>2003</option>
                                                <option value=2004>2004</option>
                                                <option value=2005>2005</option>
                                                <option value=2006>2006</option>
                                                <option value=2007>2007</option>
                                                <option value=2008>2008</option>
                                                <option value=2009>2009</option>
                                                <option value=2010>2010</option>
                                                <option value=2011>2011</option>
                                                <option value=2012>2012</option>
                                                <option value=2013>2013</option>
                                                <option value=2014>2014</option>
                                                <option value=2015>2015</option>
                                                <option value=2016>2016</option>
                                                <option value=2017>2017</option>
                                                <option value=2018>2018</option>
                                                <option value=2019>2019</option>
                                                <option value=2020>2020</option>
                                                <option value=2021>2021</option>
                                                <option value=2022>2022</option>
                                                <option value=2023>2023</option>
                                                <option value=2024>2024</option>
                                                <option value=2025>2025</option>
                                                <option value=2026>2026</option>
                                                <option value=2027>2027</option>
                                                <option value=2028>2028</option>
                                                <option value=2029>2029</option>
                                                <option value=2030>2030</option>
                                                <option value=2031>2031</option>
                                                <option value=2032>2032</option>
                                                <option value=2033>2033</option>
                                                <option value=2034>2034</option>
                                                <option value=2035>2035</option>
                                                <option value=2036>2036</option>
                                                <option value=2037>2037</option>
                                                <option value=2038>2038</option>
                                                <option value=2039>2039</option>
                                                <option value=2040>2040</option>
                                                <option value=2041>2041</option>
                                                <option value=2042>2042</option>
                                                <option value=2043>2043</option>
                                                <option value=2044>2044</option>
                                                <option value=2045>2045</option>
                                                <option value=2046>2046</option>
                                                <option value=2047>2047</option>
                                                <option value=2048>2048</option>
                                                <option value=2049>2049</option>
                                                <option value=2050>2050</option>
                                            </select>
                                        </form>
                                    </div>
                                </div>

                                <table id="gestation-calendar">
                                    <caption id="monthAndYear"></caption>
                                    <tr class="weekdays">
                                        <th scope="col">Sunday</th>
                                        <th scope="col">Monday</th>
                                        <th scope="col">Tuesday</th>
                                        <th scope="col">Wednesday</th>
                                        <th scope="col">Thursday</th>
                                        <th scope="col">Friday</th>
                                        <th scope="col">Saturday</th>
                                    </tr>

                                    <tbody id="gestation-calendar-body">

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
<!-- main content area end -->

<?php include 'footer.php'; ?>