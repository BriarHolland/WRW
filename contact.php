 <?php include('header.php'); ?>

       <img class="headerImg" src="i/headerImg.jpg" alt="header"></img>
 
 
 <div class="contactContain clearfix">
       <h2 class="heading">&#8764; contact &#8764;</h2>

       <div class="contact">
           <div class="contactLeftCol">
               <h3>Contact</h3>
               <p>Please contact me for any specific requests or to discuss delivery</p>

	             <div class="extraInfo">
	             	<h5>William Worsp</h5>
	               <p>027 526 0802</p>
	               <p>wrworsp@gmail.com</p>
	              </div>
               
               <div class="contactForm clearfix">

								    <form class="contact-form form" id="customForm" action="mail-send.php" method="post">
								     
								      <div class="orderDetails">
								       	<!--[if IE]><label for="name">Name / Company:</label><![endif]-->
								        <input type="text" class="formtext" id="name" name="name" placeholder="Name" />
								      </div>
								      <div class="orderDetails">
								        <!--[if IE]><label for="email">Email:</label><![endif]-->
								        <input type="text" class="formtext" id="email" name="email" placeholder="Email"  />
								      </div> 
								      <div class="orderDetails">
								        <!--[if IE]><label for="email">Subject:</label><![endif]-->
								        <input type="text" class="formtext" id="subject" name="email" placeholder="Subject"  />
								      </div>
								      <div class="orderDetails">
								        <!--[if IE]><label for="message">Message:</label><![endif]-->
								        <textarea class="formtext" id="message" name="message"></textarea>
								      </div>
								       <p id="status"></p>
								      <div class="orderIt">
								        <input class="radiobutton submit" type="submit" value="Send" />
								      </div>
								      <input id="spam" class="hidden" name="spam" type="text" value="" />
								    </form>
							</div><?php // end .contactForm	?>
           </div><!--leftCol-->
           
           
           

           <div class="contactRightCol">
               <h3>Order</h3>
               <p>Please use this order form to place an order</p>

               <div class="orderFormCon clearfix">
								<form id="orderForm" name="orderForm" action="#" method="post">
									<div class="orderDetails">
										<!--[if IE]><label for="name">Name:</label><![endif]-->
										<input id="Oname" type="text" name="name" value="" placeholder="Name">
									</div>
									<div class="orderDetails">
										<!--[if IE]><label for="email">Email:</label><![endif]-->
										<input id="Oemail" type="email" name="email" value="" placeholder="Email">
									</div>
									<div class="orderDetails">
										<!--[if IE]><label for="phone">Phone:</label><![endif]-->
										<input id="Ophone" type="tel" name="phone" value="" placeholder="Phone"> 
									</div>
									<div class="orderDetails">
										<!--[if IE]><label for="name">Address:</label><![endif]-->
										<input id="address" type="text" name="address" value="" placeholder="Address">
									</div>
									<div class="orderDetails">
										<!--[if IE]><label for="city">City:</label><![endif]-->
										<input id="Ocity" type="text" name="city" value="" placeholder="City">
									</div>
									<div class="orderForm1">
										<!--[if IE]><label for="table">Choose Table Top:</label><![endif]-->
										<select class="orderSelect"  name="table" id="table">
											<option class="greyMe" value="null">Choose Table Top:</option>
											<option value="Table1">Table1</option>
											<option value="Table2">Table2</option>			
											<option value="Table3">Table3</option>
											<option value="Table4">Table4</option>
										</select>
									</div>
									<div class="orderForm2">
										<!--[if IE]><label for="base">Choose The Base:</label><![endif]-->
										<select class="orderSelect" id="base" name="base">
											<option value="null">Choose The Base:</option>
											<option value="Base2">Base3</option>			
											<option value="Base3">Base3</option>
										</select>
									</div>
									<div class="orderDetails">
										<!--[if IE]><label for="orderMessage">City:</label><![endif]-->
										<textarea class="formtext" placeholder="Message" id="message" name="message"></textarea>
									</div>
									<div class="orderIt">
										<input class="submit" type="submit" name="submit" value="Order" />
									</div>
						</form>
						
					</div><!--end .orderformCon-->

           </div><!--rightCol-->
           
           <div class="social">
            	<span class="sm">Social Media</span>
	           <span class="fac">Facebook</span>
	           <span class="pin">Pintrest</span>
           
           </div>

       </div><!--/contact-->
       </div>
   </div>

 <?php include('footer.php'); ?>