package com.expedia.lodging.connectivity.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.expedia.lodging.connectivity.model.PartnerInfo;
import com.expedia.lodging.connectivity.service.MessageService;

@Controller
@RequestMapping("/api")
public class RestController {
	
	 @Autowired
	 private MessageService messageService;
	
	@RequestMapping("/partnerInfo")
	@ResponseBody
	public List<PartnerInfo> partnerInfoList() {
		return messageService.getPartnerInfoList();
	}
	
	@RequestMapping("/partnerInfo/{partnerID}")
	@ResponseBody
	public PartnerInfo partnerInfo(@PathVariable String partnerID) {
		return messageService.getPartnerInfo(partnerID);
	}
	
	
	@RequestMapping("/test")
	@ResponseBody
	public String test2() {
		return "test2";
	}
	
	
	

}
