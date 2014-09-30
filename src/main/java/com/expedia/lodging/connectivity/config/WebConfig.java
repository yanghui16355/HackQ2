package com.expedia.lodging.connectivity.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

import com.expedia.lodging.connectivity.service.MessageService;

@Configuration
@ComponentScan("com.expedia.lodging.connectivity")
@EnableWebMvc
@EnableTransactionManagement
<<<<<<< Updated upstream
@Import({BeanConfig.class})
public class WebConfig {
=======
//@Import({BeanConfig.class})
public class WebConfig extends WebMvcConfigurerAdapter{
>>>>>>> Stashed changes
	
	
	
	
	 @Override
	 public void addResourceHandlers(ResourceHandlerRegistry registry) {
//	       registry.addResourceHandler("/css/**").addResourceLocations("/css/");
//	       registry.addResourceHandler("/img/**").addResourceLocations("/img/");
//	       registry.addResourceHandler("/js/**").addResourceLocations("/js/");
	       registry.addResourceHandler("/resources/**").addResourceLocations("/WEB-INF/views/resources/");
	 }
	
	@Bean
	public InternalResourceViewResolver setupViewResolver() {
		InternalResourceViewResolver resolver = new InternalResourceViewResolver();
	        resolver.setPrefix("/WEB-INF/views/");
	        resolver.setSuffix(".jsp");
	      //  resolver.setViewClass(JstlView.class);
	        return resolver;
	    }
	
	

}
