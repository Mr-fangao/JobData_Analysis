<template>
    <layout :style="{height:'100%'}">
        <!-- <Sider ref="side1" :width='180'>
          <sider-menu/>>
        </Sider> -->
        <Content>
					<Header :style="{padding: 0}" class="layout-header-bar">
							<Breadcrumb>
									<Icon :style="{margin: '0 5px'}" type="md-menu" size="25"></Icon>
									<BreadcrumbItem v-for="(item,idx) in $route.matched" :key="idx" :to="(item.path)">{{item.name}}</BreadcrumbItem>
							</Breadcrumb>
					</Header>
					<div style="margin: 0 auto;margin-top: 5px;width:1300px;">
							<!-- <Card style="height:1500px;">
									<Collapse v-model="value1">
											<Panel name="2">
													数据选择
													<Card slot="content" style="width:1230px;margin-bottom:10px">
															<p slot="title">
																	<Icon type="ios-film-outline"></Icon>
																	时间
															</p>
															<span> 从 </span>
															<DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
															<span> 至 </span>
															<DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
													</Card>
											</Panel>

											<Panel name="1">
													指标选择
													<Card slot="content" style="width:1230px;margin-bottom:10px">
															<p slot="title">
																	<Icon type="ios-film-outline"></Icon>
																	区位资源
															</p>
															<CheckboxGroup v-model="jg" style="margin-bottom:15px">
																	<span style="margin-right:48px">景观</span>
																	<Checkbox label="绿地公园"></Checkbox>
																	<Checkbox label="水源"></Checkbox>
																	<Checkbox label="风景区"></Checkbox>
															</CheckboxGroup>
															<CheckboxGroup v-model="xqjy" style="margin-bottom:15px">
																	<span style="margin-right:20px">学区教育</span>
																	<Checkbox label="幼儿园"></Checkbox>
																	<Checkbox label="小学"></Checkbox>
																	<Checkbox label="中学"></Checkbox>
															</CheckboxGroup>
															<CheckboxGroup v-model="jt" style="margin-bottom:15px">
																	<span style="margin-right:48px">交通</span>
																	<Checkbox label="公交站"></Checkbox>
																	<Checkbox label="地铁"></Checkbox>
																	<Checkbox label="主干道"></Checkbox>
																	<Checkbox label="火车站"></Checkbox>
																	<Checkbox label="汽车站"></Checkbox>
															</CheckboxGroup>
															<CheckboxGroup v-model="yl" style="margin-bottom:15px">
																	<span style="margin-right:48px">医疗</span>
																	<Checkbox label="医院"></Checkbox>
																	<Checkbox label="卫生站"></Checkbox>
															</CheckboxGroup>
															<CheckboxGroup v-model="shbl" style="margin-bottom:15px">
																	<span style="margin-right:20px">生活便利</span>
																	<Checkbox label="菜市场"></Checkbox>
																	<Checkbox label="药店"></Checkbox>
																	<Checkbox label="便利店"></Checkbox>
																	<Checkbox label="超市"></Checkbox>
																	<Checkbox label="其它生活服务"></Checkbox>
															</CheckboxGroup>
															<CheckboxGroup v-model="gwyl" style="margin-bottom:15px">
																	<span style="margin-right:20px">购物娱乐</span>
																	<Checkbox label="大型商场"></Checkbox>
																	<Checkbox label="餐饮酒店"></Checkbox>
																	<Checkbox label="文化休闲"></Checkbox>
															</CheckboxGroup>
													</Card>

													<Card slot="content" style="width:1230px;margin-bottom:10px">
															<p slot="title">
																	<Icon type="ios-film-outline"></Icon>
																	小区条件
															</p>
															<CheckboxGroup v-model="xqtj" style="margin-bottom:15px">
																	<Checkbox label="物业管理"></Checkbox>
																	<Checkbox label="容积率"></Checkbox>
																	<Checkbox label="绿化率"></Checkbox>
																	<Checkbox label="车位数量"></Checkbox>
															</CheckboxGroup>
													</Card>

													<Card slot="content" style="width:1230px">
															<p slot="title">
																	<Icon type="ios-film-outline"></Icon>
																	住宅条件
															</p>
															<CheckboxGroup v-model="zztj" style="margin-bottom:15px">
																	<Checkbox label="装修情况"></Checkbox>
																	<Checkbox label="住宅类型"></Checkbox>
																	<Checkbox label="户型"></Checkbox>
																	<Checkbox label="层高"></Checkbox>
																	<Checkbox label="面积"></Checkbox>
															</CheckboxGroup>
													</Card>
											</Panel>
											<Panel name="3">
												模型参数设置
											</Panel>
									</Collapse>
									<Button type="primary" @click="onSubmit" style="float:right;margin-top:20px">确定</Button>
							</Card> -->
					</div>
					<router-view/>
        </Content>

    </layout>

</template>
<script>
import SiderMenu from "@/views/main/siderMenu";
export default {
  data() {
    return {
      // value1: "1",
      // jg: ["绿地公园"],
      // xqjy: ["幼儿园", "小学", "中学"],
      // jt: ["公交站"],
      // yl: ["医院"],
      // shbl: ["菜市场", "药店"],
      // gwyl: ["大型商场"],
      // xjys: ["垃圾中转站", "墓地"],
      // xqtj: ["容积率"],
      // modal1: false
    };
  },
  components: {
    SiderMenu
  },
  methods: {
    // onSubmit() {
    //   this.$router.push("/GWR");
    // }
  }
};
</script>
<style>
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
</style>

