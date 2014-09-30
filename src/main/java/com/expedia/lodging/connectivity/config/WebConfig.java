package com.expedia.lodging.connectivity.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

import com.expedia.lodging.connectivity.service.MessageService;

@Configuration
@ComponentScan("com.expedia.lodging.connectivity")
@EnableWebMvc
@EnableTransactionManagement
@Import({BeanConfig.class})
public class WebConfig {
	
	
	
	@Bean
	public InternalResourceViewResolver setupViewResolver() {
		InternalResourceViewResolver resolver = new InternalResourceViewResolver();
	        resolver.setPrefix("/WEB-INF/views/");
	        resolver.setSuffix(".jsp");
	      //  resolver.setViewClass(JstlView.class);
	        return resolver;
	    }
	
	

}
